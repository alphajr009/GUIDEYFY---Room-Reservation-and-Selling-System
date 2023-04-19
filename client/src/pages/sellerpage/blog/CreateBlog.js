import React, { useState } from 'react';
import './createblog.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationArrow, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import uploadImgIcon from '../../../images/uploadImgIcon.png'
import { Input, Form } from 'antd';
import axios from 'axios';

function CreateBlog() {

    const [activeSlide, setActiveSlide] = useState(1);

    const goToSlide = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')



    async function createroom() {

        console.log('Room Create Function Called');
        const user = {
            description,
            title,
            imageurls: [],
        };


        try {
            const response = await axios.post('http://localhost:5000/api/blogs/addblog', user);
        } catch (error) {
            if (error.response) {
                console.log('Error1:');
            } else {
                console.log('Error2:');
            }
        }

    }






    return (
        <div className="slider-container">
            <div className="create-blog-slider-box">
                <div className="slide-container">
                    <div className={`slide ${activeSlide === 1 ? 'active' : 'hidden'}`}>
                        {/* Slide 1 content */}
                        <div className='slide1'>
                            <div className="createblog-slide1-sbar">
                                <div className="slide1-sbar-box">

                                    <div className="create-blog-searchbar-extract">
                                        {/* container for booking id */}
                                        <div className="admin-terminal-search-bar-blogs-blog-id">
                                            <FontAwesomeIcon icon={faLocationArrow} className="blogs-blogid-icon" />
                                            <input
                                                type="text"
                                                placeholder="Search the Room "
                                                className="admin-terminal-blogs-blog-id"

                                            />
                                        </div>
                                        {/* container fors search*/}
                                        <div className='admin-blogs-filter-search'>
                                            <button className='btn-blogs-search-admin-terminal' >
                                                <FontAwesomeIcon icon={faSearch} className="blogs-search" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="createblog-slide1-roomselect">
                                <div className="crb-slide1-roomslect-bar">
                                    <div className='crb-slide1-roomslect-bar-h1-txt'>
                                        <h1>Room Name</h1>
                                    </div>
                                </div>
                                <div className="crb-slide1-roomslect-down"></div>
                            </div>
                            <div className='createblog-slide1-button'>
                                <button className='crb-slide1-roomslect-down-btn' onClick={() => goToSlide(2)}>Select and Go</button>
                            </div>
                        </div>
                    </div>
                    <div className={`slide ${activeSlide === 2 ? 'active' : 'hidden'}`}>
                        <div className='slide2'>
                            {/* Slide 2 content*/}
                            <div className="crb-slide2-content-wrapper">
                                <FontAwesomeIcon
                                    style={{ fontSize: '22px', cursor: 'pointer' }}
                                    icon={faArrowLeft}
                                    onClick={() => goToSlide(1)}
                                />
                                <div className="crb-s2-header">
                                    <h1>Upload your images:</h1>
                                </div>
                                <div className="crb-s2-images-upload">
                                    <div className="scrb-s2-iu-wrapper">
                                        <div className="scrb-s2-iu-wrapper-box-main">
                                            <div className="scrb-image-upload-icon">
                                                <img src={uploadImgIcon} />
                                            </div>
                                            <div className="scrb-image-uploadimg-txt">
                                                <h4>Upload Main Image</h4>
                                            </div>
                                        </div>
                                        <div className="scrb-s2-iu-wrapper-box-main">
                                            <div className="scrb-image-upload-icon">
                                                <img src={uploadImgIcon} />
                                            </div>
                                            <div className="scrb-image-uploadimg-txt">
                                                <h4>Upload  Image </h4>
                                                <h4>2 </h4>
                                            </div>
                                        </div>
                                        <div className="scrb-s2-iu-wrapper-box-main">
                                            <div className="scrb-image-upload-icon">
                                                <img src={uploadImgIcon} />
                                            </div>
                                            <div className="scrb-image-uploadimg-txt">
                                                <h4>Upload Image </h4>
                                                <h4>3 </h4>
                                            </div>
                                        </div>
                                        <div className="scrb-s2-iu-wrapper-box-main">
                                            <div className="scrb-image-upload-icon">
                                                <img src={uploadImgIcon} />
                                            </div>
                                            <div className="scrb-image-uploadimg-txt">
                                                <h4>Upload Image </h4>
                                                <h4>4 </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Form>
                                    <div className="crb-s2-blog-title-wrap">
                                        <div className="createblog-dis-namebox">
                                            <div className="createblog-dis-namebox-container">
                                                <Form.Item
                                                    className='createblog-dis-namebox-conatiner-p'
                                                    label="Title:"
                                                    name="title"
                                                    rules={[{ required: true, message: 'Please input your Title!' }]}
                                                >
                                                    <Input className="createblog-dis-custom-input"
                                                        value={title}
                                                        onChange={(e) => { settitle(e.target.value) }}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="userp-help-messagebox">
                                            <div className="userp-help-namebox-container">
                                                <Form.Item
                                                    className='userp-help-namebox-conatiner-p'
                                                    label="Discription:"
                                                    name="description"
                                                    rules={[{ required: true, message: 'Please input your blog discription!' }]}
                                                >
                                                    <Input.TextArea style={{ height: "245px", width: "626px" }} showCount maxLength={3000} className="userp-helpmsg-custom-input"
                                                        value={description}
                                                        onChange={(e) => { setdescription(e.target.value) }} />
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                                <div className="crb-s2-blog-create-btn">
                                    <button className='crb-slide1-roomslect-down-btn' onClick={createroom} >Create</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;



