import React, { useState, useEffect } from 'react';
import './personaldetails.css';
import { Select } from 'antd';
import axios from 'axios'
import { Modal, Form, Input, notification } from 'antd';
import {
  CheckCircleOutlined,
} from '@ant-design/icons';


function Personaldetail() {

  const { Option } = Select;

  const nationalities = [
    'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian',
    'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian',
    'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese',
    'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch',
    'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian'
    , 'I-Kiribati', 'Icelander', 'Indian',
    'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan',
    'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger',
    'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian',
    'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan',
    'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese',
    'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian',
    'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian/Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Vanuatu',
    'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'
  ];



  const country = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
    'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
    'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)',
    'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor-Leste)',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
    'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
    'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
    'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea',
    'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
    'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand',
    'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America',
    'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];


  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setnationality] = useState('');
  const [address, setaddress] = useState('');
  // const [address1, setaddress1] = useState('');
  // const [address2, setaddress2] = useState('');
  // const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const [openemail, setOpenemail] = useState(false);
  const [opendisplayName, setOpenDisplayname] = useState(false);
  const [openBirthday, setOpenBirthday] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);
  const [openNationality, setOpenNationality] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, setloading] = useState(false)
  const [formValid, setFormValid] = useState(false);
  const formRef = React.useRef(null);
  const { location } = window;


  const onReset = () => {
    formRef.current?.resetFields();
  };

  const onFinish = async () => {
    try {
      await formRef.current?.validateFields();
      setFormValid(true);
    } catch (error) {
      setFormValid(false);
    }
  };


  // for name
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    changeUserDetails(formRef.current.getFieldValue("Fname"), formRef.current.getFieldValue("Lname"))
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    notification.open({
      message: 'Your Name is Updated',
      description: '',
      placement: 'topRight',
      className: "style-noti-personal-details",
      icon: <CheckCircleOutlined />
    });
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  async function changeUserDetails(fname, lname) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');


    const _id = currentUser._id;
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/editusername', { _id, fname, lname })).data;
      console.log(res);

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        fname: fname ? fname : currentUser.fname,
        lname: lname ? lname : currentUser.lname,
      }));
      location.reload();

    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }


  //for email
  const showEmailModal = () => {
    setOpenemail(true);
  };

  const handleEmail = () => {
    changeEmailDetails(formRef.current.getFieldValue("Email"))
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenemail(false);
      setConfirmLoading(false);
    }, 2000);
    notification.open({
      message: 'Your Email is Updated',
      description: '',
      placement: 'topRight',
      className: "style-noti-personal-details",
      icon: <CheckCircleOutlined />
    });
  };

  const handleEmailCancel = () => {
    console.log('Clicked cancel button');
    setOpenemail(false);
  }

  async function changeEmailDetails(email) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/edituseremail', { _id, email })).data;
      console.log(res);

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        email: email ? email : currentUser.email
      }));
      location.reload();

    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }


  // for displayname
  const showDisplayNameModal = () => {
    setOpenDisplayname(true);
  };

  const handleDisplayName = () => {
    changeDisplayName(formRef.current.getFieldValue("DisplayName"))
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenDisplayname(false);
      setConfirmLoading(false);
    }, 2000);
    notification.open({
      message: 'Your Displayname is Updated',
      description: '',
      placement: 'topRight',
      className: "style-noti-personal-details",
      icon: <CheckCircleOutlined />
    });
  };


  const handleDisplayNameCancel = () => {
    console.log('Clicked cancel button');
    setOpenDisplayname(false);
  }


  async function changeDisplayName(displayName) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/edituserdisplayname', { _id, displayName })).data;
      console.log(res);

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        displayName: displayName ? displayName : currentUser.displayName
      }));

      location.reload();
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }


  //for address
  const showAddressModal = () => {
    setOpenAddress(true);
  };

  const handleAddressCancel = () => {
    console.log('Clicked cancel button');
    setOpenAddress(false);
  }
  const handleAddress = async () => {
    const address1 = formRef.current.getFieldValue("address1");
    const address2 = formRef.current.getFieldValue("address2");
    const city = formRef.current.getFieldValue("city");
    const country = formRef.current.getFieldValue("country");

    try {
      await changeAddressDetails(address1, address2, city, country);
      setConfirmLoading(true);
      setTimeout(() => {
        setaddress(false);
        setConfirmLoading(false);
      }, 2000);
      notification.open({
        message: 'Your Address is Updated',
        description: '',
        placement: 'topRight',
        className: "style-noti-personal-details",
        icon: <CheckCircleOutlined />
      });
    } catch (error) {
      console.log(error);
    }
  };


  async function changeAddressDetails(address1, address2, city, country) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    const address = [address1, address2, city, country];
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/editaddress', { _id, address })).data;
      console.log(res);

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        address: address ? address : currentUser.address,
      }));

      location.reload();
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  //for birthday
  const showBirthdayModal = () => {
    setOpenBirthday(true);
  };


  const handleBirthdayCancel = () => {
    console.log('Clicked cancel button');
    setOpenBirthday(false);
  }

  const handleBirthday = async () => {
    const month = formRef.current.getFieldValue("month");
    const day = formRef.current.getFieldValue("day");
    const year = formRef.current.getFieldValue("year");

    try {
      await changeBirthdayDetails(month, year, day);
      setConfirmLoading(true);
      setTimeout(() => {
        setBirthday(false);
        setConfirmLoading(false);
      }, 2000);
      notification.open({
        message: 'Your Birthday is Updated',
        description: '',
        placement: 'topRight',
        className: "style-noti-personal-details",
        icon: <CheckCircleOutlined />
      });
    } catch (error) {
      console.log(error);
    }
  };


  async function changeBirthdayDetails(month, year, day) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    const birthday = [month, day, year];
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/editbirthday', { _id, birthday })).data;
      console.log(res);

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        birthday: birthday ? birthday : currentUser.birthday

      }));

      location.reload();

    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  //for nationality
  const showOpenNationality = () => {
    setOpenNationality(true);
  };

  const handleNationalityCancel = () => {
    console.log('Clicked cancel button');
    setOpenNationality(false);
  }

  const handleNationality = () => {
    changeNationalityDetails(formRef.current.getFieldValue("Nationality"))
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenNationality(false);
      setConfirmLoading(false);
    }, 2000);
    notification.open({
      message: 'Your Nationality is Updated',
      description: '',
      placement: 'topRight',
      className: "style-noti-personal-details",
      icon: <CheckCircleOutlined />
    });
  };

  async function changeNationalityDetails(nationality) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/editnationality', { _id, nationality })).data;
      console.log(res);

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        nationality: nationality ? nationality : currentUser.nationality
      }));
      location.reload();

    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }


  //for gender

  const showModelGender = () => {
    setOpenGender(true);
  };

  const handleGenderCancel = () => {
    console.log('Clicked cancel button');
    setOpenGender(false);
  }

  const handleGender = () => {
    changeGenderDetails(formRef.current.getFieldValue("Gender"))
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenGender(false);
      setConfirmLoading(false);
    }, 2000);
    notification.open({
      message: 'Your Gender is Updated',
      description: '',
      placement: 'topRight',
      className: "style-noti-personal-details",
      icon: <CheckCircleOutlined />
    });
  };


  async function changeGenderDetails(gender) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/editngender', { _id, gender })).data;
      console.log(res);

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        gender: gender ? gender : currentUser.gender
      }));

      location.reload();


    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }


  //json for current user
  const user = JSON.parse(localStorage.getItem("currentUser"))

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("currentUser"))

    if (!user) {
      window.location.href = "/home"
    }

  }, [])


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/users/getuserbyid', { userid: user._id });
        const data = response.data[0];
        setFname(data.fname);
        setLname(data.lname);
        setEmail(data.email);
        setDisplayname(data.displayName);
        setnationality(data.nationality);
        setGender(data.gender)

        const birthdayString = `${data.birthday[0]}/${data.birthday[1]}/${data.birthday[2]}`;
        setBirthday(birthdayString);

        const addressString = `${data.address[0]},${data.address[1]},${data.address[2]},${data.address[3]}`;
        setaddress(addressString);


      } catch (error) {
        console.log('error');
      }
    })();
  }, []);



  return (

    <div className='user-profile-personal-details'>
      <div className="user-profile-main-txt">Personal Details</div>
      <div className='user-profile-box-con'>


        {/* Name Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container">
            <div className='user-profile-box-container-name'>
              <p className='user-profile-box-container-text'>Name</p>
            </div>
            <div className='user-p-bc-name-c'>
              <p className='user-profile-bc-fname'>{fname} {lname}</p>
            </div>
            <div className='user-pro-bc-edit-popup'>
              <p className='user-pro-bc-edit-popup' onClick={showModal} >Edit</p>

              <Modal
                title="Enter Your Name"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                className="edit-model"
                onCancel={handleCancel}
                okText="Save"

              >
                <Form ref={formRef} className="user-details" onFinish={(values) => changeUserDetails(values.Fname, values.Lname)}
                  size='large'
                  initialValues={{ Fname: user.fname, Lname: user.lname }}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please Enter a First Name"
                      }
                    ]}
                    name="Fname"
                    label="First Name"
                  >
                    <Input placeholder={user.fname} />
                  </Form.Item>

                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please Enter a Last Name"
                      }
                    ]}
                    name="Lname"
                    label="Last Name"
                  >
                    <Input placeholder={user.lname} />
                  </Form.Item>
                </Form>
              </Modal>

            </div>
          </div>
        </div>


        {/* Display Name Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-p-2">
            <div className='user-profile-box-container-display-name'>
              <p className='user-profile-box-display-name-text'>Display Name</p>
            </div>
            <div className='user-bc-display-c'>
              <p className='user-profile-bc-fname'>{displayname}</p>

            </div>
            <p className='user-pro-bc-edit-popup' onClick={showDisplayNameModal}>Edit</p>


            <Modal
              title="Enter your display name"
              className="edit-model"
              open={opendisplayName}
              onOk={handleDisplayName}
              confirmLoading={confirmLoading}
              onCancel={handleDisplayNameCancel}
              okText="Save"
            >
              <Form ref={formRef} name="control-ref" onFinish={(values) => changeDisplayName(values.DisplayName)}
                size='large'
                initialValues={{ DisplayName: user.displayName }}>

                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please Enter a Display Name"
                    }
                  ]}
                  name="DisplayName"
                  label="Display Name"
                >
                  <Input placeholder={user.displayName} />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>


        {/* Email Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-p-3">
            <div className='user-profile-box-container-email'>
              <p className='user-profile-box-container-email-text'>Email</p>
            </div>
            <div className='user-bc-email-c'>
              <p className='user-profile-bc-email'>{email} </p>
            </div>
            <p className='user-pro-bc-edit-popup' onClick={showEmailModal} >Edit</p>

            <Modal
              title="Enter your email"
              className="edit-model"
              open={openemail}
              onOk={handleEmail}
              confirmLoading={confirmLoading}
              onCancel={handleEmailCancel}
              okText="Save"
            >
              <Form ref={formRef} name="control-ref" onFinish={(values) => changeEmailDetails(values.Email)}
                rules={[
                  {
                    required: true,
                    message: "Please Enter a Email"
                  }
                ]}
                size='large'
                initialValues={{ Email: user.email }}>

                <Form.Item
                  name="Email"
                  label="Email"
                >
                  <Input placeholder={user.email} />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>


        {/* Address Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-p-4">
            <div className='user-profile-box-container-address'>
              <p className='user-profile-box-container-address-text'>Address</p>
            </div>
            <div className='user-p-bc-address'>
              <p className='user-profile-bc-address'>{address}</p>
            </div>
            <p className='user-pro-bc-edit-popup' onClick={showAddressModal}>Edit</p>

            <Modal
              title="Enter Your Address"
              className="edit-model"
              open={openAddress}
              onOk={handleAddress}
              confirmLoading={confirmLoading}
              onCancel={handleAddressCancel}
              okText="Save"
            >
              <Form
                ref={formRef}
                name="contr-ref"
                onFinish={(values) =>
                  changeAddressDetails(
                    values.address1,
                    values.address2,
                    values.city,
                    values.country
                  )
                }
                size="large"
                initialValues={{
                  address1: user.address ? user.address[0] : undefined,
                  address2: user.address ? user.address[1] : undefined,
                  city: user.address ? user.address[2] : undefined,
                  country: user.address ? user.address[3] : undefined,
                }}
              >
                <Form.Item
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 16 }}
                  label="Address Line 1"
                  name="address1"
                  labelAlign="left"
                  rules={[{ required: true, message: 'Please input your address line 1.' }]}
                >
                  <Input placeholder="Address Line 1" />
                </Form.Item>

                <Form.Item
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 16 }}
                  label="Address Line 2"
                  name="address2"
                  labelAlign="left"
                  rules={[{ required: true, message: 'Please input your address line 2.' }]}
                >
                  <Input placeholder="Address Line 2" />
                </Form.Item>

                <Form.Item
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 16 }}
                  label="City"
                  name="city"
                  labelAlign="left"
                  rules={[{ required: true, message: 'Please input your city.' }]}
                >
                  <Input placeholder="City" />
                </Form.Item>

                <Form.Item
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 16 }}
                  label="Country"
                  name="country"
                  labelAlign="left"
                  rules={[{ required: true, message: 'Please select your country.' }]}
                >
                  <Select
                    className="user-p--select"
                    placeholder="Country"
                    style={{ width: '165px' }}
                  >
                    {country.map((country) => (
                      <Option key={country}>{country}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form>
            </Modal>

          </div>
        </div>


        {/* Birthday Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-p-5">
            <div className='user-profile-box-container-birthday'>
              <p className='user-profile-box-container-text-birthday'>Birthday</p>
            </div>
            <div className='use-rp-bc-b-day'>
              <p className='user-profile-bc-b-day'>{birthday}</p>
            </div>
            <p className='user-pro-bc-edit-popup' onClick={showBirthdayModal}>Edit</p>

            <Modal
              title="Enter Your Birthday"
              className="edit-model"
              open={openBirthday}
              onOk={handleBirthday}
              confirmLoading={confirmLoading}
              onCancel={handleBirthdayCancel}
              okText="Save"
            >
              <Form ref={formRef} name="control-ref" onFinish={(values) => changeBirthdayDetails(values.month, values.day, values.year)}
                rules={[
                  {
                    required: true,
                    message: "Please Enter a Email"
                  }
                ]}
                size='large'
                initialValues={{
                  month: user.birthday ? user.birthday[0] : undefined,
                  day: user.birthday ? user.birthday[1] : undefined,
                  year: user.birthday ? user.birthday[2] : undefined,
                }}
                >

                <Form.Item
                  name="month"
                  label="Month"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  style={{ display: 'inline-block', width: 'calc(30% - 8px)' }}
                >
                  <Select
                    className="personal-details-birthday-month"
                    placeholder="Month"
                    style={{ width: '120px' }}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                      <Option key={month}>
                        {month}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>


                <Form.Item
                  name="day"
                  label="Day"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  style={{ display: 'inline-block', width: 'calc(33% - 8px)' }}
                >
                  <Select
                    className="personal-details-birthday-day"
                    placeholder="Day"
                    style={{ width: '120px', marginLeft: '10px' }}
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <Option key={day}>
                        {day}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>


                <Form.Item
                  name="year"
                  label="Year"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  style={{ display: 'inline-block', width: 'calc(33% - 8px)' }}
                >
                  <Select
                    className="personal-details-birthday-year"
                    placeholder="Year"
                    style={{ width: '120px', marginLeft: '5px' }}

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
              </Form>
            </Modal>
          </div>
        </div>


        {/* Nationality Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-p-6">
            <div className='user-profile-box-container-nationality'>
              <p className='user-profile-box-container-text-nationality'>Nationality</p>
            </div>
            <div className='user-p-bc-nationality'>
              <p className='user-profile-bc-nationality'>
                {nationality}</p>
            </div>
            <p className='user-pro-bc-edit-popup' onClick={showOpenNationality}>Edit</p>


            <Modal
              title="Enter Your Nationality"
              className="nationality-model"
              open={openNationality}
              onOk={handleNationality}
              confirmLoading={confirmLoading}
              onCancel={handleNationalityCancel}
              okText="Save"

            >
              <Form ref={formRef} name="control-ref" onFinish={(values) => changeNationalityDetails(values.Nationality)}
                rules={[
                  {
                    required: true,
                    message: "Please Select Nationality"
                  }
                ]}
                size='large'
                initialValues={{ Nationality: user.nationality }}>

                <Form.Item
                  name="Nationality"
                  label="Nationality"
                >
                  <Select
                    className="userp-nationality-select"
                    placeholder="Nationality"
                    style={{ width: '125px' }}
                  >
                    {nationalities.map(nationality => (
                      <Option key={nationality}>
                        {nationality}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>


        {/* Gender Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-p-7">
            <div className="user-profile-box-container-gender">
              <p className='user-profile-box-container-text-gender'>Gender</p>
            </div>
            <div className='user-p-bc-gender'>
              <p className='user-pro-gender-text'>{gender}</p>
            </div>
            <p className='user-pro-bc-edit-popup' onClick={showModelGender}>Edit</p>

            <Modal
              title="Enter Your Nationality"
              className="nationality-model"
              open={openGender}
              onOk={handleGender}
              confirmLoading={confirmLoading}
              onCancel={handleGenderCancel}
              okText="Save"

            >
              <Form ref={formRef} name="control-ref" onFinish={(values) => changeGenderDetails(values.Gender)}
                rules={[
                  {
                    required: true,
                    message: "Please Select the Gender"
                  }
                ]}
                size='large'
                initialValues={{ Gender: user.gender }}>

                <Form.Item
                  name="Gender"
                  label="Gender"
                >
                  <Select
                    className="user-p-gender-select"
                    placeholder="Gender"
                    style={{ width: '125px' }}

                  >
                    <Option key="Male">Male</Option>
                    <Option key="Female">Female</Option>
                    <Option key="Other">Other</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personaldetail