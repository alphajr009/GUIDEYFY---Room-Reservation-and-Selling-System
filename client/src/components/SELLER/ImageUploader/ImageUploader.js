import React, { useState } from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ImageUploader = ({ index, onImageUpload }) => {
  const [fileList, setFileList] = useState([]);

  const handleChange = async ({ file, fileList: newFileList }) => {
    setFileList(newFileList);

    if (file.status === 'done') {
      const base64Image = await getBase64(file.originFileObj);
      onImageUpload(index, base64Image);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
<Upload
  listType="picture-card"
  fileList={fileList}
  onChange={handleChange}
  onRemove={() => onImageUpload(index, '')}
  showUploadList={{
    showPreviewIcon: false,
  }}
  beforeUpload={() => false} // Add this line
>
  {fileList.length >= 1 ? null : uploadButton}
</Upload>

  );
};

export default ImageUploader;
