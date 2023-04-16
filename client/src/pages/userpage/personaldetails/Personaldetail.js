import React, { useState,useEffect } from 'react';
import './personaldetails.css';
import { Select } from 'antd';
import axios from 'axios'



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

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
 

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
    
          console.log(data); 
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
            <p className='user-profile-box-containerp'>Name</p>
            <div className='userp-bc-namec'>
              <p className='user-profile-bc-fname'>{fname}</p>
              <p className='user-profile-bc-lname'>{lname}</p>
            </div>
            <p className='userpro-bc-editpopup'>Edit</p>
          </div>
        </div>
        {/* Display Name Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container-displayn">
            <p className='user-profile-box-containerp'>Display Name</p>
            <div className='userp-bc-displayc'>
              <p className='user-profile-bc-fname'>{displayname}</p>
            </div>
            <p className='userpro-bc-editpopup-displayn'>Edit</p>
          </div>
        </div>
        {/* Email Box Container */}
        <div className="user-profile-box">
          <div className="user-profile-box-container">
            <p className='user-profile-box-containerp'>Email</p>
            <div className='userp-bc-emailc'>
              <p className='user-profile-bc-fname'>{email} </p>
            </div>
            <p className='userpro-bc-editpopup-email'>Edit</p>
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