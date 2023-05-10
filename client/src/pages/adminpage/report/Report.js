import React, { useState } from 'react';
import './report.css'
import { Form, Select } from 'antd';

function Report() {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    const { Option } = Select;

    const types = [
        'Booking',
        'Rooms',
        'Payment History',
        'Users',
        'Sellers',
        'Blogs',
    ];



    return (
        <div className='report-container-main'>
            <div className="report-container">
                <div className="report-container-box-bar">
                    <div className='generate-reports-txt'>
                        <h1>Generate reports</h1>
                    </div>
                    <div className='report-type-text'>
                        <Form.Item
                            label="Select Report:"
                            name="selectReport"
                            wrapperCol={{ span: 16}}
                            labelCol={{ span: 8 }}
                            className='type-of-report'

                            rules={[{ required: true, message: 'Please select a report type!' }]}
                        >
                            <Select
                                placeholder="Select Report Source"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                style={{ width: '300px', textAlign: 'left', marginLeft: '20px' }}
                            >
                                {types.map((type) => (
                                    <Option key={type} value={type}>
                                        {type}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='download'>
                    <button className='download-receipt'>Download Report</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report