import React, { useState } from 'react';
import axios from 'axios'
import { Modal, Input, Form, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './signinmodal.css';


function Signinmodal() {
    const [isModalVisible, setIsModalVisible] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinishModal = () => {
        handleCancel();
    };


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState()


    async function Login() {

        console.log('Register function called');
        const user = {
            email,
            password,

        };



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

    return (
        <>
            <button className="btn-signin-modal" onClick={showModal}>
                Sign In
            </button>

            <Modal
                visible={isModalVisible}
                closable={false}
                onCancel={handleCancel}
                footer={null}
                width="342px"
                className="signin-modal"
                bodyStyle={{ borderRadius: '17px' }}
                style={{ position: 'absolute', right: '4%', top: '15%' }}

            >
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


            </Modal>
        </>
    );
}

export default Signinmodal;
