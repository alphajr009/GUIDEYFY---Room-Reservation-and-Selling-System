import React, { useState } from 'react';
import axios from 'axios'
import { Modal, Input, Form, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";
import './registermodal.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import SuccessAnimation from '../../STYLES/sucessfulanimation/SuccessAnimation'
import { library } from '@fortawesome/fontawesome-svg-core';







library.add(faSpinner);



const { Option } = Select;


function Registermodal() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState(1);
  const [error, seterror] = useState()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const switchToNextModal = () => {
    setCurrentModal(2);
  };

  const switchToPreviousModal = () => {
    setCurrentModal(1);
  };

  const switchToSigninModal = () => {
    setCurrentModal(4);
  };

  const onFinishFirstModal = () => {
    switchToNextModal();
  };

  const onFinishSecondModal = () => {
    register();
  };

  const onFinishModal = () => {
    handleCancel();
};


  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')
  const [umonth, setmonth] = useState('')
  const [uday, setday] = useState('')
  const [uyear, setyear] = useState('')

  const [isLoading, setIsLoading] = useState(false);


  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [isLoading]);


  async function Login() {

    console.log('Register function called');
    const user = {
        email,
        password,

    };

    console.log(user);

    try {
  
        const { data, status } = await axios.post('http://localhost:5000/api/users/login', user);

        if (status === 200) {
            localStorage.setItem('currentUser', JSON.stringify(data));
            window.location.href = '/home'
        } else {
            seterror(true);
        }

    } catch (error) {
        if (error.response) {
            console.log('Error1:');
        } else {
            console.log('Error2:');
        }

    }
}





  async function register() {
    setIsLoading(true);
    console.log('Register function called');
    const user = {
      email,
      password,
      fname,
      lname,
      birthday: [umonth, uday, uyear],
    };

    console.log(user);

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', user);
      console.log('Response:', response.data);
    } catch (error) {
      if (error.response) {
        console.log('Error1:');
      } else {
        console.log('Error2:');
      }
    }
    setTimeout(() => {
      setIsLoading(false);
      setCurrentModal(3);
    }, 1500);
  }


  return (
    <>
      <button className="btn-reg" onClick={showModal}>
        Register
      </button>

      <Modal
        visible={isModalVisible}
        closable={false}
        onCancel={handleCancel}
        footer={null}
        width="342px"
        className="register-modal"
        bodyStyle={{ borderRadius: '17px' }}
        style={{ position: 'absolute', right: '4%', top: '15%' }}

      >


        {currentModal === 1 && (
          <>
            <h2 className='modal-sign-create-acc-h2'>Sign in or create an account</h2>
            <Form onFinish={onFinishFirstModal} >
              <Form.Item
                className='form-txt-custom'
                label="Email"
                name="email"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your email.' }]}
              >
                <Input className="regmodal-custom-input" value={email}
                  onChange={(e) => { setemail(e.target.value) }} />
              </Form.Item>

              <Form.Item
                className='form-txt-custom'
                label="Password"
                name="password"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your password.' }]}
              >
                <Input.Password
                  className="regmodal-custom-input"
                  value={password}
                  onChange={(e) => { setpassword(e.target.value) }}
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>


              <Form.Item
                className='form-txt-custom'
                label="Confirm Password"
                name="confirmPassword"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match.'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  className="regmodal-custom-input"
                  value={cpassword}
                  onChange={(e) => { setcpassword(e.target.value) }}
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <Form.Item className="continue-button">
                <div className="regmodal-button-container">
                  <button className='reg-btn-continue' type="primary" htmlType="submit" >
                    Continue
                  </button>
                </div>
              </Form.Item>

            </Form>
          </>
        )}


        {currentModal === 2 && (
          <>
            <FontAwesomeIcon
              className="back-button"
              icon={faArrowLeft}
              onClick={switchToPreviousModal}
            />

            <h2>Personal Information</h2>
            <Form onFinish={onFinishSecondModal} >
              <Form.Item
                className='form-txt-custom'
                label="First Name"
                name="firstName"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your first name.' }]}
              >
                <Input className="regmodal-custom-input"
                  value={fname}
                  onChange={(e) => { setfname(e.target.value) }}
                />
              </Form.Item>


              <Form.Item
                className='form-txt-custom'
                label="Last Name"
                name="lastName"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your last name.' }]}
              >
                <Input className="regmodal-custom-input"
                  value={lname}
                  onChange={(e) => { setlname(e.target.value) }} />
              </Form.Item>

              <div classname='flexregmoodal'>
                <Form.Item
                  className='form-txt-custom'
                  label="Date Of Birth"
                  name="dateofbirth"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                </Form.Item>


                <Form.Item
                  className="regmoda-date-of-birth-label"
                  rules={[{ required: true }]}>
                  <div className="dob-dropdown-container">
                    <Form.Item
                      className='form-txt-custom'
                      name="month"
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      style={{ display: 'inline-block', width: 'calc(33% - 8px)' }}
                      rules={[{ required: true, message: 'Please select the month.' }]}
                    >
                      <Select
                        className="reg-modal-month-select"
                        placeholder="Month"
                        style={{ width: '85px' }}
                        onChange={(month) => setmonth(month)}
                      >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                          <Option key={month}>
                            {month}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>


                    <Form.Item
                      className='form-txt-custom'
                      name="day"
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      style={{ display: 'inline-block', width: 'calc(33% - 8px)', margin: '0 8px' }}
                      rules={[{ required: true, message: 'Please select the day.' }]}
                    >
                      <Select
                        className="reg-modal-day-select"
                        placeholder="Day"
                        style={{ width: '68px', marginLeft: '10px' }}
                        onChange={(day) => setday(day)}

                      >
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                          <Option key={day}>
                            {day}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>


                    <Form.Item
                      className='form-txt-custom'
                      name="year"
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                      style={{ display: 'inline-block', width: 'calc(33% - 8px)' }}
                      rules={[{ required: true, message: 'Please select the year.' }]}
                    >
                      <Select
                        className="reg-modal-year-select"
                        placeholder="Year"
                        style={{ width: '80px', marginLeft: '5px' }}
                        onChange={(year) => setyear(year)}
                      >
                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(
                          year => (
                            <Option key={year} >
                              {year}
                            </Option>
                          ),
                        )}
                      </Select>
                    </Form.Item>
                  </div>
                </Form.Item>
              </div>

              <Form.Item className="modal-reg-button">
                <div className="regmodal-button-container">
                  <button
                    className={`reg-btn-agree ${isLoading ? 'buttonload' : ''}`}
                    type="primary"
                    htmlType="submit"
                  >
                    {isLoading ? (
                      <div >
                        Setting Up
                        <FontAwesomeIcon className='regmodal-settingup-loading' icon="spinner" spin />
                      </div>
                    ) : (
                      'Agree and continue'
                    )}
                  </button>


                </div>
              </Form.Item>

            </Form>

            <p className="regmodal-terms-text">
              By signing in or creating an account, you agree with our{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms & conditions
              </a>{' '}
              and{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy statement
              </a>
            </p>
          </>
        )}

        {currentModal === 3 && (
          <>
            <h1>Welcome to GUIDEYFY </h1>
            <SuccessAnimation />
            <h2>Your account setup successful</h2>
            <button className='reg-btn-continue' onClick={switchToSigninModal} >
              Sign In
            </button>
          </>
        )}

        {currentModal === 4 && (
        <>
        <h2 className='modal-signintoguidefy-h2'>Sign in to GUIDEFY </h2>
        <Form onFinish={onFinishModal} >
            <Form.Item
                className='formsigninto-txt-custom'
                label="Email"
                name="email"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input className="signinmodal-custom-input"
                    value={email}
                    onChange={(e) => {setemail(e.target.value) }}
                />
            </Form.Item>
            <Form.Item
                className='formsigninto-txt-custom'
                label="Password"
                name="password"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password
                    className="signinmodal-custom-input"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    value={password}
                    onChange={(e) => {setpassword(e.target.value) }}
                />
            </Form.Item>

            <Form.Item
                className="forgot-password-wrapper"
                wrapperCol={{ offset: 15, span: 15 }}
            >
                <a
                    className="signin-btn-forget"
                    type="primary"
                    htmlType="submit"
                    href="/forgotpassword"
                >
                    Forgot Password?
                </a>
            </Form.Item>


            <Form.Item className="modal-signin-button">
                <div className="signinmodal-button-container">
                    <button
                        className='signinmodal-btn-signin'
                        type="primary"
                        htmlType="submit"
                        onClick={Login}
                    >
                        Sign In
                    </button>
                </div>
            </Form.Item>

        </Form>
        <p className="regmodal-terms-text">
            By signing in or creating an account, you agree with our{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms & conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy statement
            </a>
        </p>
    </>
        )}




      </Modal>
    </>
  );
}

export default Registermodal;