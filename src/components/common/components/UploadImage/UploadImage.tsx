import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../core/redux';
import { authorizationSlice } from '../../../modules/authorization/AuthorizationSlice';

import s from './UploadImage.module.scss';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const { setImageUrl } = authorizationSlice.actions;

export const UploadImage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const { imageUrl, currentUser } = useAppSelector((state) => state.authorizationReducer);

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        dispatch(setImageUrl(url));
      });
    }
  };

  const uploadButton = (
    <div className={s.uploadBtn}>
      {imageUrl ? (
        <img className={s.image} src={imageUrl} alt='avatar' style={{ width: '100%' }} />
      ) : (
        <img className={s.image} src={currentUser.avatar} alt='avatar' style={{ width: '100%' }} />
      )}
      <div className={s.content} style={{ marginTop: 8 }}>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        Upload
      </div>
    </div>
  );

  return (
    <Upload
      name='avatar'
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {uploadButton}
    </Upload>
  );
};
