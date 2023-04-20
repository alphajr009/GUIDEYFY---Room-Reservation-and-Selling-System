import React, { useState } from 'react';
import './createblog.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationArrow, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Input, Form } from 'antd';
import axios from 'axios';
import ImageUploader from '../../../components/SELLER/ImageUploader/ImageUploader'

function CreateBlog() {

    const [activeSlide, setActiveSlide] = useState(1);

    const goToSlide = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')

    const [imageurls, setImageurls] = useState(Array(4).fill(''));

    const onImageUpload = (index, base64Image) => {
        const newImageurls = [...imageurls];
        newImageurls[index] = base64Image;
        setImageurls(newImageurls);
    };



    async function createroom() {

        console.log('Room Create Function Called');
        const newblog = {
            description,
            title,
            imageurls: [],
        };


        try {
            const response = await axios.post('http://localhost:5000/api/blogs/addblog', newblog);
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

                    {/* Slide 1 */}


                    <div className={`slide ${activeSlide === 1 ? 'active' : 'hidden'}`}>
                        {/* Slide 1 content */}
                        <div className='slide1'>
                            <div className="createblog-slide1-sbar">
                                <div className="slide1-sbar-box">

                                    <div className="create-blog-searchbar-extract">
                        
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

                    {/* Slide 2 */}


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
                                        {Array(4)
                                            .fill(0)
                                            .map((_, index) => (
                                                <ImageUploader key={index} index={index} onImageUpload={onImageUpload} />
                                            ))}



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



