import React, { useCallback, useState } from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { authorizationSlice } from '../../AuthorizationSlice';
import { IAuth } from '../../interfaces/authorizationInterface';
import { monthOptions, yearOptions, genderOptions } from '../../halpers/halpers';
import Types, { routes } from '../../../../types';

import s from './RegistrationPage.module.scss';

const { setNewUser } = authorizationSlice.actions;
const { appSizesMap } = Types;

export const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isAgree, setIsAgree] = useState(false);

  const { size } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;

  const onFinish = useCallback(
    (values: IAuth) => {
      if (isAgree) {
        dispatch(setNewUser({ ...values, isAdmin: true }));
        navigate(routes.login);
      }
    },
    [dispatch, isAgree]
  );

  const handleChecked = (value: CheckboxChangeEvent) => {
    setIsAgree(value.target.checked);
  };

  return (
    <div className={s.RegistrationPage}>
      <div className={s.pageTitle}>StaffPro</div>

      <div className={s.registrationCard}>
        <div className={s.cardTitle}>{t('register')}</div>
        <Form
          className={s.AuthForm}
          name='basic'
          initialValues={{ remember: false }}
          onFinish={onFinish}
          autoComplete='off'
          layout='vertical'
          requiredMark={false}
        >
          <Form.Item
            name='login'
            rules={[
              { required: true, message: t('required_field') },
              { type: 'email', message: t('enter_mail') },
            ]}
          >
            <Input placeholder='Email' />
          </Form.Item>

          <Form.Item
            name='sureName'
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('surname')} />
          </Form.Item>

          <div className={s.groupFields}>
            <Form.Item
              name='name'
              rules={[
                { required: true, message: t('required_field') },
                { max: 20, message: t('max_characters_20') },
              ]}
            >
              <Input placeholder={t('name')} />
            </Form.Item>

            <Form.Item
              name='lastName'
              rules={[
                { required: true, message: t('required_field') },
                { max: 20, message: t('max_characters_20') },
              ]}
            >
              <Input placeholder={t('middle_name')} />
            </Form.Item>
          </div>

          <Form.Item
            name='password'
            rules={[
              { required: true, message: t('required_field') },
              { min: 4, message: t('password_between_4_and_64_characters') },
              { max: 64, message: t('password_between_4_and_64_characters') },
            ]}
          >
            <Input.Password placeholder={t('password')} style={{ padding: '0 12px' }} />
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
            <Input.Password placeholder={t('repeat_password')} style={{ padding: '0 12px' }} />
          </Form.Item>

          <div className={s.birthday}>
            <div className={s.birthdayTitle}>Дата рождения</div>
            <div className={s.topWrapper}>
              <Form.Item
                name='day'
                rules={[
                  { required: true, message: t('required_field') },
                  { type: 'number', max: 31, min: 1 },
                ]}
              >
                <InputNumber style={{ width: '100%' }} min={1} max={31} placeholder={t('day')} />
              </Form.Item>

              <Form.Item
                className={s.month}
                name='month'
                rules={[{ required: true, message: t('required_field') }]}
              >
                <Select placeholder={t('month')} size='large'>
                  {monthOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name='year' rules={[{ required: true, message: t('required_field') }]}>
                <Select placeholder={t('year')} size='large'>
                  {yearOptions().map((option) => (
                    <Select.Option key={option} value={option}>
                      {option}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className={s.bottomWrapper}>
              <Form.Item name='phone' rules={[{ required: true, message: t('number_not_exist') }]}>
                <InputNumber
                  formatter={(value: number | string | undefined) =>
                    value ? value.toString().slice(0, 8) : ''
                  }
                  addonBefore={<div style={isMobile ? { fontSize: 8 } : {}}>(+373)</div>}
                  placeholder={t('phone')}
                />
              </Form.Item>

              <Form.Item name='gender' rules={[{ required: true, message: t('required_field') }]}>
                <Select placeholder={t('floor')} size='large'>
                  {genderOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>

          <Form.Item
            name='readOut'
            valuePropName='checked'
            rules={[
              () => ({
                validator() {
                  if (isAgree) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('terms_agreement')));
                },
              }),
            ]}
            className={s.checkBox}
          >
            <p>
              <Checkbox onChange={handleChecked} className={s.checkboxLabel}>
                {t('i_agree')}
              </Checkbox>
              <Link to={routes.login} className={s.linkBtn}>
                {t('user_agreement')}
              </Link>
              {t('and')}
              <Link to={routes.login} className={s.linkBtn}>
                {t('policy')}
              </Link>
            </p>
          </Form.Item>

          <Button style={{ width: '100%' }} type='primary' htmlType='submit'>
            {t('create_an_account')}
          </Button>
        </Form>

        <div className={s.haveAccount}>
          {t('already_have_an_account')} StaffPro?{' '}
          <Link to={routes.login} className={s.linkBtn}>
            {t('login')}
          </Link>
        </div>
      </div>
    </div>
  );
};
