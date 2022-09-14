import React, { FC } from 'react';
import { Button, Drawer, Form, Input, Divider } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { authorizationSlice } from '../../../authorization/AuthorizationSlice';
import { IAuth } from '../../../authorization/interfaces/authorizationInterface';
import { onChangePassword } from '../../../authorization/halpers/halpers';

import s from './EditUserAuthInfoDrawer.module.scss';

const { setUser, setChangeableMail, setChangeableArray } = authorizationSlice.actions;

interface EditUserAuthInfoDrawer {
  showEditAuth: boolean;
  closeEditAuth: () => void;
  isMobile: boolean;
}

export const EditUserAuthInfoDrawer: FC<EditUserAuthInfoDrawer> = ({
  showEditAuth,
  closeEditAuth,
  isMobile,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { currentUser, arrayUsers } = useAppSelector((state) => state.authorizationReducer);

  const { password } = currentUser;

  const redirect = () => {
    closeEditAuth();
  };

  const setMail = () => {
    dispatch(setChangeableMail(''));
  };
  const setArrWithUserChangedPassword = (arr: IAuth[]) => {
    dispatch(setChangeableArray(arr));
  };

  const onFinish = (values: IAuth) => {
    onChangePassword(
      values,
      arrayUsers,
      redirect,
      setMail,
      currentUser.login,
      setArrWithUserChangedPassword
    );
    dispatch(setUser({ ...currentUser, ...values }));
  };

  return (
    <Drawer
      title={t('change_password')}
      placement='right'
      onClose={closeEditAuth}
      open={showEditAuth}
      width={isMobile ? 240 : ''}
    >
      <Form
        className={s.Form}
        name='ChangeUserAuthInfo'
        onFinish={onFinish}
        layout='vertical'
        requiredMark={false}
        style={{ height: '-webkit-fill-available' }}
      >
        <Form.Item
          name='oldPassword'
          label={t('old_password')}
          rules={[
            { required: true, message: t('required_field') },
            { min: 4, message: t('password_between_4_and_64_characters') },
            { max: 64, message: t('password_between_4_and_64_characters') },
            () => ({
              validator(_, value) {
                if (!value || password === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('passwords_not_match')));
              },
            }),
          ]}
        >
          <Input.Password
            size='large'
            placeholder={t('old_password')}
            style={{ padding: '0 12px' }}
          />
        </Form.Item>

        <Form.Item
          name='password'
          label={t('new_password')}
          rules={[
            { required: true, message: t('required_field') },
            { min: 4, message: t('password_between_4_and_64_characters') },
            { max: 64, message: t('password_between_4_and_64_characters') },
          ]}
        >
          <Input.Password size='large' placeholder={t('password')} style={{ padding: '0 12px' }} />
        </Form.Item>

        <Form.Item
          name='confirmPassword'
          label={t('confirm_password')}
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
          <Input.Password
            size='large'
            placeholder={t('repeat_password')}
            style={{ padding: '0 12px' }}
          />
        </Form.Item>

        <div className={s.formFooter}>
          <Divider />

          <div className={s.btnWrapper}>
            <Button className={s.reset} htmlType='reset'>
              {t('cancellation')}
            </Button>

            <Button className={s.submit} type='primary' htmlType='submit'>
              {t('change_password')}
            </Button>
          </div>
        </div>
      </Form>
    </Drawer>
  );
};
