import React, { useState,useEffect } from 'react'
import './security.css'
import axios from 'axios'
import { Modal, Form, Input, notification } from 'antd';
import Swal from 'sweetalert2'
import {
  CheckCircleOutlined,
} from '@ant-design/icons';



function Security() {


  const user = JSON.parse(localStorage.getItem("currentUser"))

  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/home'
  }


  async function deleteUser() {

    const _id = user._id;
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/deleteuser', { _id })).data;
      console.log("User Deleted Successfully");
      logout();
      window.location.href = '/home'
    } catch (error) {
      console.log(error)

    }
  }

  const [changePassOpen, setChangePassOpen] = useState(false);
  const [changePassLoading, setChangePassLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const formRef = React.useRef(null);
  const[password,setPassword]=useState('');


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
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/users/getuserbyid', { userid: user._id });
        const data = response.data[0];
        setPassword(data.password);
        
      } catch (error) {
        console.log('error');
      }
    })();
  }, []);


  const showChangePassModal = () => {
    setChangePassOpen(true);
  };

  const handleChangePassOk = () => {
    changePassword(
      formRef.current.getFieldValue("currentPassword"),
      formRef.current.getFieldValue("newPassword"),
      formRef.current.getFieldValue("confirmPassword"))
    setChangePassLoading(true);
    setChangePassOpen(false);
    setChangePassLoading(false);

    
    if (formRef.current.getFieldValue("newPassword") === formRef.current.getFieldValue("confirmPassword") && formRef.current.getFieldValue("currentPassword") === user.password) {
      notification.open({
        message: 'Password Changed',
        description: '',
        placement: 'topRight',
        icon: <CheckCircleOutlined />
      });
    }
    else {
      Swal.fire('Oops!', 'Password not match or current password is incorrect', 'error')
    }
    

  };

  const handleChangePassCancel = () => {
    setChangePassOpen(false);
  };


  async function changePassword(currentPassword, newPassword, confirmPassword) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) throw new Error('User not found in local storage');

    const _id = currentUser._id;
    if (newPassword !== confirmPassword) {
      throw new Error('New password and confirm password do not match');

    }
    try {
      const res = (await axios.patch('http://localhost:5000/api/users/changepassword', { _id, currentPassword, newPassword })).data;
      console.log("Password updated successfully");
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='user-p-security'>
      <div className="user-p-boxall">
        {/* Password Change Box */}
        <div className="user-p-password-box">
          <div className="user-psecure-box-container">
            <p className='user-psecure-box-containerp'>Password</p>
            <div className='user-psecure-bc-passwordbc'>
              <p className='user-psecure-bc-passwordbc-name'>Change your password regularly to keep
                your account secure</p>
            </div>
            <div className='userp-secure-btn-container'>
              <button className='user-psecure-bc-password-btn' type="primary" onClick={showChangePassModal}>
                Change
              </button>

              <Modal
                title="Change Password"
                open={changePassOpen}
                onOk={handleChangePassOk}
                confirmLoading={changePassLoading}
                onCancel={handleChangePassCancel}
              >
                <Form ref={formRef} name="control-ref" onFinish={() => handleChangePassOk()} size='large'>
                  <Form.Item
                    wrapperCol={{
                      offset: 0,
                      span: 16,
                    }}
                    name="currentPassword"
                    label="Current Password"
                    rules={[{ required: true, message: 'Please input your current password!' }]}
                  >
                    <Input.Password placeholder="  Current Password" className="no-border" />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 1,
                      span: 16,
                    }}
                    name="newPassword"
                    label="New Password"
                    rules={[{ required: true, message: 'Please input your new Password!' }]}
                  >
                    <Input.Password placeholder="  New Password" className="no-border" />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 0,
                      span: 16,
                    }}
                    name="confirmPassword"
                    label="Confirm Password"
                    rules={[{ required: true, message: 'Please confirm  Password!' }]}
                  >
                    <Input.Password placeholder="  Confirm Password" className="no-border" />
                  </Form.Item>
                </Form>
              </Modal>

            </div>
          </div>
        </div>
        {/*Active Session Box Container */}
        <div className="user-p-activesession-box">
          <div className="user-psecure-box-container">
            <p className='user-psecure-box-containerp-activesession'>Active session</p>
            <div className='user-psecure-bc-passwordbc'>
              <p className='user-psecure-bc-passwordbc-name'>Selecting 'Sign Out' will end your current session
                and sign you out from all devices.</p>
            </div>
            <div className='userp-secure-btn-container'>
              <button className='user-psecure-bc-password-btn' onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </div>
        {/* Delete Account Box Container */}
        <div className="user-p-deleteacc-box">
          <div className="user-psecure-box-container">
            <p className='user-psecure-box-containerp-deleteacc'>Delete Account</p>
            <div className='user-psecure-bc-passwordbc'>
              <p className='user-psecure-bc-passwordbc-name'>This action will permanently remove your account and all associated data,
                including your personal information and history. This cannot be undone. Please proceed with caution.</p>
            </div>
            <div className='userp-secure-btn-container'>
              <button className='user-psecure-bc-password-btn' onClick={() => {
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  cancelButtonText: 'Cancel',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete User!'
                }).then((result) => {
                  if (result.isConfirmed) {

                    deleteUser(user._id)
                    Swal.fire(
                      'Deleted!',
                      'User has been deleted.',
                      'success'
                    )
                      .then(result => {
                        localStorage.clear();
                        window.location.href = '/home'
                      })
                  }
                })
              }}  >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security