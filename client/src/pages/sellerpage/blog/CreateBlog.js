import React, { useState, useEffect } from 'react';
import './createblog.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Input, Form, Radio, Pagination, Alert, Select } from 'antd';
import axios from 'axios';
import ImageUploader from '../../../components/SELLER/ImageUploader/ImageUploader';

function CreateBlog() {

    const user = JSON.parse(localStorage.getItem("currentUser"))
    const [rooms, setrooms] = useState([]);

    const { Option } = Select;


    const [showAlert, setShowAlert] = useState(false);

    const [activeSlide, setActiveSlide] = useState(1);

    const goToSlide = (slideNumber, selectedRoomId) => {
        if (!selectedRoomId) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
            setActiveSlide(slideNumber);
        }
    };

    const goToSlideback = (slideNumber) => {
        setActiveSlide(slideNumber);

    };



    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')

    const [imageurls, setImageurls] = useState(Array(4).fill(''));

    const [selectedRoomId, setSelectedRoomId] = useState(null);

    const handleRoomChange = (e) => {
        setSelectedRoomId(e.target.value);
    };



    const onImageUpload = (index, imageFile) => {
        setImageurls((prevImageurls) => {
            const newImageurls = [...prevImageurls];
            newImageurls[index] = imageFile;
            console.log(`Image at index ${index}:`, imageFile);
            return newImageurls;
        });
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredRooms = rooms.filter((room) =>
        room.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [
        'Accommodation',
        'Activities',
        'Arts and Culture',
        'Culture & Heritage',
        'Destinations',
        'Food & Drink',
        'General',
        'Guest Contributors',
        'Politics',
        'Transport',
        'Weather',
        'Wildlife',
    ];

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };



    useEffect(() => {

        (async () => {


            try {

                console.log(user._id)
                const data = (await axios.post("http://localhost:5000/api/rooms/getroombysellerid", { sellerid: user._id })).data
                setrooms(data.room);
                console.log("Rooms fetched: ", data.rooms);
                console.log(rooms)


            } catch (error) {
                console.log('Error:', error);
            }

        })();
    }, []);



    async function createroom() {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("room_id", selectedRoomId);
        formData.append("category", selectedCategory);

        imageurls.forEach((image, index) => {
            if (image) {
                formData.append("images", image, `${user._id}-${index}.jpg`);
            }
        });

        console.log('imageurls:', imageurls);

        try {
            const response = await axios.post("http://localhost:5000/api/blogs/addblog", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.status);
        } catch (error) {
            if (error.response) {
                console.log("Error1:");
            } else {
                console.log("Error2:");
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
                            {showAlert && (
                                <Alert message="Please select a room before proceeding." type="error" />
                            )}
                            <div className="createblog-slide1-sbar">
                                <div className="slide1-sbar-box">

                                    <div className="create-blog-searchbar-extract">

                                        <div className="createblog-search-bar-blogs-blog-id">
                                            <FontAwesomeIcon icon={faLocationArrow} className="blogs-blogid-icon" />
                                            <input
                                                type="text"
                                                placeholder="Search the Room "
                                                className="admin-terminal-blogs-blog-id"
                                                onChange={handleSearchChange}

                                            />
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
                                <div className="crb-slide1-roomslect-down">
                                    {filteredRooms && filteredRooms.length > 0 && (
                                        <Radio.Group
                                            className="radio-array-createblog"
                                            onChange={handleRoomChange}
                                            value={selectedRoomId}
                                        >
                                            {filteredRooms
                                                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                                .map((room) => (
                                                    <Radio key={room._id} value={room._id}>
                                                        {room.title}
                                                    </Radio>
                                                ))}
                                        </Radio.Group>
                                    )}
                                </div>
                            </div>
                            <div className="pagination-container">
                                <Pagination
                                    current={currentPage}
                                    onChange={handlePageChange}
                                    pageSize={itemsPerPage}
                                    total={rooms.length}
                                    className="rooms-pagination"
                                />
                            </div>
                            <div className='createblog-slide1-button'>
                                <button
                                    className="crb-slide1-roomslect-down-btn"
                                    onClick={() => goToSlide(2, selectedRoomId)}

                                >
                                    Select and Go
                                </button>

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
                                    onClick={() => goToSlideback(1)}
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
                                    <div className='createblog-dis-select'>
                                    <Form.Item
                                    className='createblog-dis-namebox-conatiner-p'
                                    label="Category:"
                                    name="category"
                                    rules={[{ required: true, message: 'Please input your Title!' }]}>
                                        <Select
                                            className="createblog-category-select"
                                            placeholder="Category"
                                            style={{ width: '175px' }}
                                            value={selectedCategory}
                                            onChange={handleCategoryChange}
                                        >
                                            {categories.map(category => (
                                                <Option key={category}>
                                                    {category}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>
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



