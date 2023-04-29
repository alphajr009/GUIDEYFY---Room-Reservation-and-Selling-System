import React, { useState, useEffect } from 'react';
import './createproperty.css'
import { Input, Form, Select } from 'antd';
import ImageUploader from '../../../components/SELLER/ImageUploader/ImageUploader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function CreateProperty() {


    const user = JSON.parse(localStorage.getItem("currentUser"))
    const [imageurls, setImageurls] = useState(Array(5).fill(''));

    const [activeSlide, setActiveSlide] = useState(1);

    const goToSlide = (slideNumber) => {


        setActiveSlide(slideNumber);

    };

    const goToSlideback = (slideNumber) => {
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

                                <Form>

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


                                        />
                                    </Form.Item>

                                    {/* Category */}

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

                                        >
                                            {types.map(type => (
                                                <Option key={type}>
                                                    {type}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>



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
                                        name="contactnumber"
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 8 }}
                                        labelAlign="left"
                                    >
                                        <Input size="large"
                                            style={{ width: '410px' }}
                                            className='input-room-name'
                                            placeholder="Preferred contact number"

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
                        <div className='createproperty-slide2'>
                            <button
                                className="createprop-down-btn-continue"
                                onClick={() => goToSlideback(4)}
                            >
                                Back
                            </button>

                            <button
                                className="createprop-down-btn-continue"
                                onClick={() => goToSlide(6)}
                            >
                                Goto Slide 6
                            </button>


                        </div>
                    </div>

                    <div className={`slide ${activeSlide === 6 ? 'active' : 'hidden'}`}>
                        <div className='createproperty-slide2'>
                            <button
                                className="createprop-down-btn-continue"
                                onClick={() => goToSlideback(5)}
                            >
                                Back
                            </button>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProperty