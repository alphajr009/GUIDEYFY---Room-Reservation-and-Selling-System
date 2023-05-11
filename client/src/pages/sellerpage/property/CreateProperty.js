import React, { useState, useEffect } from 'react';
import './createproperty.css'
import axios from 'axios';
import { Input, Form, Select, Checkbox } from 'antd';
import ImageUploader from '../../../components/SELLER/ImageUploader/ImageUploader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function CreateProperty() {


    const user = JSON.parse(localStorage.getItem("currentUser"))
    const [imageurls, setImageurls] = useState(Array(5).fill(''));
    const [checkservice, setCheckservice] = useState('')

    const [activeSlide, setActiveSlide] = useState(1);

    const goToSlide = async (slideNumber) => {
        try {
            await form.validateFields();
            setActiveSlide(slideNumber);
        } catch (error) {
            console.log('Validation failed:', error);
        }
    };

    const goToSlideback = async (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    const { Option } = Select;

    const types = [
        'Hotel',
        'Apartment',
        'Resorts',
        'Villas',
    ];

    const onImageUpload = (index, imageFile) => {
        setImageurls((prevImageurls) => {
            const newImageurls = [...prevImageurls];
            newImageurls[index] = imageFile;
            console.log(`Image at index ${index}:`, imageFile);
            return newImageurls;
        });
    };

    const [checkedServices, setCheckedServices] = useState([]);

    const onChange = (checkedValues, serviceGroup) => {
        const newCheckedServices = [
            ...checkedServices.filter((service) => !serviceGroup.includes(service)),
            ...checkedValues,
        ];
        setCheckedServices(newCheckedServices);
        console.log('checked = ', newCheckedServices);
    };



    const onChangeServices1 = (checkedValues) => {
        onChange(checkedValues, services1.map((s) => s.value));
    };

    const onChangeServices2 = (checkedValues) => {
        onChange(checkedValues, services2.map((s) => s.value));
    };



    const services1 = [
        {
            label: 'Air conditioning',
            value: 'Air conditioning',
        },
        {
            label: 'Kitchenette',
            value: 'Kitchenette',
        },
        {
            label: 'Kitchen',
            value: 'Kitchen',
        },
        {
            label: 'Balcony',
            value: 'Balcony',
        },
        {
            label: 'Free Wi-Fi',
            value: 'Free Wi-Fi',
        },
        {
            label: 'Flat-screen TV',
            value: 'Flat-screen TV',
        },
        {
            label: 'Private pool',
            value: 'Private pool',
        },
        {
            label: 'Terrace',
            value: 'Terrace',
        },
        {
            label: 'Mini-bar',
            value: 'Mini-bar',
        },
        {
            label: 'Outdoor BBQ facilities',
            value: 'Outdoor BBQ facilities',
        },

    ];

    const services2 = [
        {
            label: 'Microwave',
            value: 'Microwave',
        },
        {
            label: 'Sea view',
            value: 'Sea view',
        },
        {
            label: 'City view',
            value: 'City view',
        },
        {
            label: 'Gym facilities',
            value: 'Gym facilities',
        },
        {
            label: 'Refrigerator',
            value: 'Refrigerator',
        },
        {
            label: 'Attach bathroom',
            value: 'Attach bathroom',
        },
        {
            label: 'Laundry service',
            value: 'Laundry service',
        },


    ];

    const [roomname, setroomname] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('');
    const [rentperday, setrentperday] = useState('')
    const [maxcount, setmaxcount] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [description, setdescription] = useState('')
    const [addressline1, setaddressline1] = useState('')
    const [addressline2, setaddressline2] = useState('')
    const [province, setprovince] = useState('')
    const [district, setdistrict] = useState('')
    const [city, setcity] = useState('')


    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        console.log('Received values of form: ', values);
    };


    async function createproperty() {
        const formData = new FormData();
        formData.append("title", roomname);
        formData.append("category", selectedCategory);
        formData.append("rentperday", rentperday);
        formData.append("maxcount", maxcount);
        formData.append("phonenumber", phonenumber);
        formData.append("description", description);
        formData.append("sellerid", user._id);
        formData.append("address", JSON.stringify([
            addressline1,
            addressline2,
            city,
            province,
            district
        ]));
        formData.append("services", JSON.stringify(checkedServices));


        imageurls.forEach((image, index) => {
            if (image) {
                formData.append("images", image, `${user._id}-${index}.jpg`);
            }
        });

        console.log('imageurls:', imageurls);


        try {
            const response = await axios.post("http://localhost:5000/api/rooms/addproperty", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.status);
        } catch (error) {
            if (error.response) {
                console.log("Error1:", error.response.data);
            } else {
                console.log("Error2:", error.message);
            }
        }

    }

    return (
        <div className="createproperty-slider-container">
            <div className="create-property-slider-box">
                <div className="property-slide-container">

                    {/* Slide 1 */}
                    <div className={`slide ${activeSlide === 1 ? 'active' : 'hidden'}`}>
                        {/* Slide 1 content */}
                        <div className='createproperty-slide1'>
                            <div className="createproperty-slide1-headtxt">
                                <h2>Create new property</h2>
                            </div>

                            <div className="createproperty-slide-container">

                                <Form onFinish={handleSubmit} form={form}>

                                    {/* Room Name */}
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter the Room Name !"
                                            }
                                        ]}
                                        label="Room Name"
                                        name="roomname"
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 16 }}
                                        labelAlign="left"
                                        className='createproperty-slide1-form-custom'
                                    >
                                        <Input size="large"
                                            className='input-room-name'
                                            placeholder="Enter the Room Name"
                                            showCount maxLength={75}
                                            value={roomname}
                                            onChange={(e) => { setroomname(e.target.value) }}
                                        />
                                    </Form.Item>

                                    {/* Category */}

                                    <div className='slide1-customselect-me'>
                                        <Form.Item
                                            className='createproperty-slide1-form-custom'
                                            label="Category:"
                                            name="category"
                                            style={{ textAlign: 'left' }}
                                            rules={[{ required: true, message: 'Please input your Title!' }]}>
                                            <Select
                                                className="createproperty-category-select"
                                                placeholder="Choose the type of room"
                                                style={{ width: '410px', textAlign: 'left', marginLeft: '114px' }}
                                                value={selectedCategory}
                                                onChange={handleCategoryChange}
                                            >
                                                {types.map(type => (
                                                    <Option key={type}>
                                                        {type}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </div>



                                    {/* Rentper Day */}
                                    <Form.Item
                                        className='createproperty-slide1-form-custom'
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter Rent per day !"
                                            }
                                        ]}
                                        label="Rent Per Day"
                                        name="rentperday"
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 8 }}
                                        labelAlign="left"
                                    >
                                        <Input size="large"
                                            style={{ width: '410px' }}
                                            className='input-room-name'
                                            placeholder="Daily rental amount"
                                            value={rentperday}
                                            onChange={(e) => { setrentperday(e.target.value) }}

                                        />
                                    </Form.Item>



                                    {/* Max Count */}
                                    <Form.Item
                                        className='createproperty-slide1-form-custom'
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter the max count !"
                                            }
                                        ]}
                                        label="Max Count"
                                        name="maxcount"
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 8 }}
                                        labelAlign="left"
                                    >
                                        <Input size="large"
                                            style={{ width: '410px' }}
                                            className='input-room-name'
                                            placeholder="How many can stay ?"
                                            value={maxcount}
                                            onChange={(e) => { setmaxcount(e.target.value) }}

                                        />
                                    </Form.Item>
                                    {/* Contact Number */}
                                    <Form.Item
                                        className='createproperty-slide1-form-custom'
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter your contact number !"
                                            }
                                        ]}
                                        label="Contact Number"
                                        name="phonenumber"
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 8 }}
                                        labelAlign="left"
                                    >
                                        <Input size="large"
                                            style={{ width: '410px' }}
                                            className='input-room-name'
                                            placeholder="Preferred contact number"
                                            value={phonenumber}
                                            onChange={(e) => { setphonenumber(e.target.value) }}

                                        />
                                    </Form.Item>
                                </Form>

                            </div>

                            <button
                                className="createprop-down-btn-continue"
                                onClick={() => goToSlide(2)}
                            >
                                Continue
                            </button>

                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className={`slide ${activeSlide === 2 ? 'active' : 'hidden'}`}>
                        <div className='createproperty-slide2'>
                            <div className='createblog-slide2-header-wrap'>
                                <div>
                                    <FontAwesomeIcon
                                        style={{ fontSize: '22px', cursor: 'pointer' }}
                                        icon={faArrowLeft}
                                        onClick={() => goToSlideback(1)}
                                    />
                                </div>
                                <div className="createproperty-slide2-headtxt">
                                    <h2>Upload Images</h2>
                                </div>
                            </div>

                            <div className="slide2-createprop-image-wrapper">
                                <div className='image-wrapper-prop-1'>
                                    <ImageUploader key={0} index={0} onImageUpload={onImageUpload} />
                                    <ImageUploader key={1} index={1} onImageUpload={onImageUpload} />
                                    <ImageUploader key={2} index={2} onImageUpload={onImageUpload} />
                                </div>
                                <div className='image-wrapper-prop-2'>
                                    <ImageUploader key={3} index={3} onImageUpload={onImageUpload} />
                                    <ImageUploader key={4} index={4} onImageUpload={onImageUpload} />
                                </div>


                            </div>

                            <button
                                className="createprop-down-btn-continue"
                                onClick={() => goToSlide(3)}
                            >
                                Continue
                            </button>


                        </div>
                    </div>

                    <div className={`slide ${activeSlide === 3 ? 'active' : 'hidden'}`}>
                        <div className='createproperty-slide2'>
                            <div className='createblog-slide2-header-wrap'>
                                <div>
                                    <FontAwesomeIcon
                                        style={{ fontSize: '22px', cursor: 'pointer' }}
                                        icon={faArrowLeft}
                                        onClick={() => goToSlideback(2)}
                                    />
                                </div>
                                <div className="createproperty-slide2-headtxt">
                                    <h2>Room Description</h2>
                                </div>
                            </div>

                            <div className='form-slide3-createblog'>
                                <Form>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please Enter Room Description !"
                                            }
                                        ]}
                                        label="Room Description"
                                        name="description"
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 16 }}
                                        labelAlign="left"
                                        className='createproperty-slide1-form-custom'
                                    >
                                        <Input.TextArea size="large"
                                            className='input-room-name'
                                            placeholder="Enter the Room Description"
                                            showCount maxLength={1000}
                                            style={{ height: '300px', width: '550px', marginLeft: '0px' }}
                                            value={description}
                                            onChange={(e) => { setdescription(e.target.value) }}
                                        />
                                    </Form.Item>
                                </Form>
                            </div>

                            <button
                                className="createprop-down-btn-continue"
                                onClick={() => goToSlide(4)}
                            >
                                Continue
                            </button>


                        </div>
                    </div>

                    <div className={`slide ${activeSlide === 4 ? 'active' : 'hidden'}`}>
                        <div className='createproperty-slide4'>
                            <div className='createblog-slide2-header-wrap'>
                                <div>
                                    <FontAwesomeIcon
                                        style={{ fontSize: '22px', cursor: 'pointer' }}
                                        icon={faArrowLeft}
                                        onClick={() => goToSlideback(3)}
                                    />
                                </div>
                                <div className="createproperty-slide4-headtxt">
                                    <h2>Location</h2>
                                </div>
                            </div>

                            <Form>

                                <Form.Item
                                    className='createproperty-slide1-form-custom'
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter Address Line 1 !"
                                        }
                                    ]}
                                    label="Address Line 1"
                                    name="addressline1"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 8 }}
                                    labelAlign="left"
                                >
                                    <Input size="large"
                                        style={{ width: '380px' }}
                                        className='input-room-name'
                                        placeholder="Address Line 1"
                                        value={addressline1}
                                        onChange={(e) => { setaddressline1(e.target.value) }}

                                    />
                                </Form.Item>

                                <Form.Item
                                    className='createproperty-slide1-form-custom'
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter Address Line 2 !"
                                        }
                                    ]}
                                    label="Address Line 2"
                                    name="addressline2"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 8 }}
                                    labelAlign="left"
                                >
                                    <Input size="large"
                                        style={{ width: '380px' }}
                                        className='input-room-name'
                                        placeholder="Address Line 2"
                                        value={addressline2}
                                        onChange={(e) => { setaddressline2(e.target.value) }}

                                    />
                                </Form.Item>

                                <Form.Item
                                    className='createproperty-slide1-form-custom'
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter Province !"
                                        }
                                    ]}
                                    label="Province"
                                    name="province"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 8 }}
                                    labelAlign="left"
                                >
                                    <Input size="large"
                                        style={{ width: '380px' }}
                                        className='input-room-name'
                                        placeholder="Name of Province"
                                        value={province}
                                        onChange={(e) => { setprovince(e.target.value) }}

                                    />
                                </Form.Item>

                                <Form.Item
                                    className='createproperty-slide1-form-custom'
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter District !"
                                        }
                                    ]}
                                    label="District"
                                    name="district"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 8 }}
                                    labelAlign="left"
                                >
                                    <Input size="large"
                                        style={{ width: '380px' }}
                                        className='input-room-name'
                                        placeholder="Name of District"
                                        value={district}
                                        onChange={(e) => { setdistrict(e.target.value) }}

                                    />
                                </Form.Item>

                                <Form.Item
                                    className='createproperty-slide1-form-custom'
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter City Name !"
                                        }
                                    ]}
                                    label="City"
                                    name="city"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 8 }}
                                    labelAlign="left"
                                >
                                    <Input size="large"
                                        style={{ width: '380px' }}
                                        className='input-room-name'
                                        placeholder="Name of City"
                                        value={city}
                                        onChange={(e) => { setcity(e.target.value) }}

                                    />
                                </Form.Item>

                            </Form>


                            <button
                                className="createprop-down-btn-continue"
                                onClick={() => goToSlide(5)}
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                    {/* Slide 5 */}

                    <div className={`slide ${activeSlide === 5 ? 'active' : 'hidden'}`}>
                        <div className='createproperty-slide5'>
                            <div className='createblog-slide2-header-wrap'>
                                <div>
                                    <FontAwesomeIcon
                                        style={{ fontSize: '22px', cursor: 'pointer' }}
                                        icon={faArrowLeft}
                                        onClick={() => goToSlideback(4)}
                                    />
                                </div>
                                <div className="createproperty-slide5-headtxt">
                                    <h2>What services does your  property have? </h2>
                                </div>
                            </div>

                            <div className='slide5-checkbox-wrapper'>
                                <div className='s5-checkbox-1set'>
                                    <Checkbox.Group options={services1} onChange={onChangeServices1} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} />
                                </div>
                                <div className='s5-checkbox-2set'>
                                    <Checkbox.Group options={services2} onChange={onChangeServices2} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} />

                                </div>
                            </div>
                            <button
                                className="createprop-down-btn-continue"
                                onClick={() => goToSlide(6)}
                            >
                                Continue
                            </button>
                        </div>

                    </div>

                    <div className={`slide ${activeSlide === 6 ? 'active' : 'hidden'}`}>
                        <div className='createproperty-slide6'>
                            <div className='createblog-slide2-header-wrap'>
                                <div>
                                    <FontAwesomeIcon
                                        style={{ fontSize: '22px', cursor: 'pointer' }}
                                        icon={faArrowLeft}
                                        onClick={() => goToSlideback(4)}
                                    />
                                </div>
                                <div className="createproperty-slide-headtxt">
                                    <h2>Terms & Conditions </h2>
                                </div>
                            </div>

                            <div className='slide6-list-terms'>
                                <ul className="slide6-list-terms-disc">
                                    <li>By listing properties on GUIDEIFY, User agrees to the Terms and conditions of this Agreement. User may list properties on the
                                        website in accordance with its policies and procedures, and must provide accurate and complete information about each property listed. </li>
                                    <li>User retains ownership of all content and information provided to GUIDIFY for listing on the web application, but grants GUIDIFY a license
                                        to use and display such content and information on the website. </li>
                                    <li>User represents and warrants that all properties listed on the website comply with applicable laws, regulations, and industry standards,
                                        and agrees to indemnify GUIDIFY for any claims or damages arising from User's failure to comply with such laws, regulations, or standards. </li>
                                    <li>GUIDEIFY disclaims all warranties and shall not be liable for any damages arising out of or in connection with
                                        User's use of the website or listing of properties on the website. </li>
                                    <li>GUIDIFY may terminate this Agreement and User's access to the website at any time without prior notice.</li>
                                </ul>
                            </div>

                            <div className='text-left'>
                                <span className='charge'>You will be charged Rs.500 </span>
                            </div>

                            <button
                                className="createprop-down-btn-continue"
                                onClick={createproperty}
                            >
                                Create Property
                            </button>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProperty