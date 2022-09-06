import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authorizationSlice } from '../../AuthorizationSlice';
import { useTranslation } from 'react-i18next';
import { onChangePassword } from '../../halpers/halpers';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { IAuth } from '../../interfaces/authorizationInterface';
import { routes } from '../../../../types';

import s from './ChangePassword.module.scss';

const { setChangeableMail, setChangeableArray } = authorizationSlice.actions;

export const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { arrayUsers, changeableMail } = useAppSelector((state) => state.authorizationReducer);

  const redirect = () => {
    navigate(routes.login);
  };

  const setMail = () => {
    dispatch(setChangeableMail(''));
  };
  const setArrWithUserChangedPassword = (arr: IAuth[]) => {
    dispatch(setChangeableArray(arr));
  };

  const onFinish = (values: { password: string }) => {
    onChangePassword(
      values,
      arrayUsers,
      redirect,
      setMail,
      changeableMail,
      setArrWithUserChangedPassword
    );
  };

  return (
    <div className={s.ChangePassword}>
      <div className={s.pageTitle}>StaffPro</div>
      <div className={s.ForgotPasswordCard}>
        <div className={s.cardTitle}>{t('enter_new_password')}</div>

        <Form
          className={s.AuthForm}
          name='basic'
          onFinish={onFinish}
          autoComplete='off'
          requiredMark={false}
        >
          <Form.Item
            name='password'
            rules={[
              { required: true, message: t('required_field') },
              {
                min: 4,
                message: t('password_between_4_and_64_characters'),
              },
              {
                max: 64,
                message: t('password_between_4_and_64_characters'),
              },
            ]}
          >
            <Input.Password placeholder={t('password')} />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            dependencies={['password']}
            rules={[
              { required: true, message: t('required_field') },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('passwords_not_match')));
                },
              }),
            ]}
          >
            <Input.Password placeholder={t('repeat_password')} />
          </Form.Item>

          <Button style={{ width: '100%' }} type='primary' htmlType='submit'>
            {t('confirm')}
          </Button>
        </Form>
      </div>
    </div>
  );
};
