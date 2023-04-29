import React, { useState, useEffect } from 'react';
import './personaldetails.css';
import { Select } from 'antd';
import axios from 'axios'
import { Modal, Form, Input, notification } from 'antd';
import {
  CheckCircleOutlined,
  DeleteFilled
} from '@ant-design/icons';


function Personaldetail() {

  const [selectedNationality, setSelectedNationality] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [userData, setuserData] = useState([])

  const { Option } = Select;

  const nationalities = [
    'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian',
    'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian',
    'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese',
    'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch',
    'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian',
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
      'Somalia','South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 
      'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America',
       'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
    ];
    
    
    
    


  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [open, setOpen] = useState(false);
  const [openemail, setOpenemail] = useState(false);
  const [opendisplayName, setOpenDisplayname] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, setloading] = useState(false)
  const [formValid, setFormValid] = useState(false);
  const formRef = React.useRef(null);


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
      className:"style-noti-personal-details",
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
      const res = (await axios.patch('http://localhost:5000/api/users/editusername', { _id,fname,lname })).data;
      console.log("User details updated successfully");

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        fname: fname ? fname : currentUser.fname,
        lname: lname ? lname : currentUser.lname,
      }));


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
        className:"style-noti-personal-details",
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
      const res = (await axios.patch('http://localhost:5000/api/users/edituseremail', {_id,email})).data;
      console.log("User details updated successfully");

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        email: email ? email : currentUser.email
      }));


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
          className:"style-noti-personal-details",
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
      const res = (await axios.patch('http://localhost:5000/api/users/edituserdisplayname', {_id,displayName})).data;
      console.log("User details updated successfully");

      localStorage.setItem("currentUser", JSON.stringify({
        _id: currentUser._id,
        displayName: displayName ? displayName : currentUser.displayName
      }));


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

        const birthdayString = `${data.birthday[0]}/${data.birthday[1]}/${data.birthday[2]}`;
        setBirthday(birthdayString);


      } catch (error) {
        console.log('error');
      }
    })();
  }, []);



  const handleNationalityChange = (value) => {
    setSelectedNationality(value);
  };

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };




  return (

    <div className='user-profile-personaldetails'>
      <div className="user-profile-mainh1txt">Personal Details</div>
      <div className='user-profile-boxesall'>

        {/* Name Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container">
            <div className='user-profile-box-containerp'>
              <p className='user-profile-box-containerp'>Name</p>
            </div>
            <div className='userp-bc-namec'>
              <p className='user-profile-bc-fname'>{fname} {lname}</p>
            </div>
            <div className='userpro-bc-editpopup1'>
              <p className='userpro-bc-editpopup' onClick={showModal} >Edit</p>

              <Modal
                title="Enter Your Name"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                className="edit-model"
                onCancel={handleCancel}
              >
                <Form ref={formRef} name="control-ref" onFinish={(values) => changeUserDetails(values.Fname, values.Lname)}
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
          <div className="user-profile-box-container-displayn">
            <div className='user-profile-box-containerpidisplay'>
              <p className='user-profile-box-containerpdis'>Display Name</p>
            </div>
            <div className='userp-bc-displayc'>
              <p className='user-profile-bc-fname'>{displayname}</p>
              
            </div>
            <p className='userpro-bc-editpopup-displayn' onClick={showDisplayNameModal}>Edit</p>

            
             <Modal
                            title="Enter your display name"
                            className="edit-model"
                            open={opendisplayName}
                            onOk={handleDisplayName}
                            confirmLoading={confirmLoading}
                            onCancel={handleDisplayNameCancel}
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
                                    name="Display Name"
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
          <div className="user-profile-box-container">
            <p className='user-profile-box-containerp'>Email</p>
            <div className='userp-bc-emailc'>
              <p className='user-profile-bc-fname'>{email} </p>
            </div>
            <p className='userpro-bc-editpopup-email' onClick={showEmailModal} >Edit</p>

            <Modal
                            title="Enter your email"
                            className="edit-model"
                            open={openemail}
                            onOk={handleEmail}
                            confirmLoading={confirmLoading}
                            onCancel={handleEmailCancel}
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
          <div className="user-profile-box-container-address">
            <p className='user-profile-box-containerp'>Address</p>
            <div className='userp-bc-address'>
              <p className='user-profile-bc-address'>34/6, Wellawatta Road,Malabe</p>
            </div>
            <p className='userpro-bc-editpopup-address'>Edit</p>
          </div>
        </div>

        {/* Birthday Box Container */}
        <div className="user-profile-box2">
          <div className="user-profile-box-container-bday">
            <p className='user-profile-box-containerp'>Birthday</p>
            <div className='userp-bc-bday'>
              <p className='user-profile-bc-bday'>{birthday}</p>
            </div>
          </div>
        </div>
        {/* Nationality Box Container */}
        <div className="user-profile-box2">
          <div className="user-profile-box-container-nationality">
            <p className='user-profile-box-containerp'>Nationality</p>
            <div className='userp-bc-nationality'>
              <Select
                className="userp-nationality-select"
                placeholder="Nationality"
                style={{ width: '125px' }}
                value={selectedNationality}
                onChange={handleNationalityChange}
              >
                {nationalities.map(nationality => (
                  <Option key={nationality}>
                    {nationality}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
        {/* Gender Box Container */}
        <div className="user-profile-box2">
          <div className="user-profile-box-container-gender">
            <p className='user-profile-box-containerp'>Gender</p>
            <div className='userp-bc-gender'>
              <Select
                className="userp-gender-select"
                placeholder="Gender"
                style={{ width: '125px' }}
                value={selectedGender}
                onChange={handleGenderChange}
              >
                <Option key="male">Male</Option>
                <Option key="female">Female</Option>
                <Option key="other">Other</Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="user-profile-savechanges-btn">
          <button className='userp-btn-savaechange' type="primary" htmlType="submit">
            Save change
          </button>
        </div>

      </div>
    </div>
  );
}

export default Personaldetail