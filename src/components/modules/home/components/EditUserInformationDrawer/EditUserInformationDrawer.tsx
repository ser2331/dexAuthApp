import React, { FC, useCallback, useMemo } from 'react';
import { Button, Col, Divider, Drawer, Form, Input, InputNumber, Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { authorizationSlice } from '../../../authorization/AuthorizationSlice';
import { IAuth } from '../../../authorization/interfaces/authorizationInterface';
import { genderOptions, monthOptions, yearOptions } from '../../../authorization/halpers/halpers';
import { UploadImage } from '../../../../common/components/UploadImage/UploadImage';

import s from './EditUserInformationDrawer.module.scss';

const { Option } = Select;

const { setUser } = authorizationSlice.actions;

interface IEditUserInformationDrawer {
  showEditDrawer: boolean;
  closeEditUserInfo: () => void;
  isMobile: boolean;
}

export const EditUserInformationDrawer: FC<IEditUserInformationDrawer> = ({
  showEditDrawer,
  closeEditUserInfo,
  isMobile,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { currentUser, imageUrl } = useAppSelector((state) => state.authorizationReducer);
  const { name, avatar, day, lastName, gender, month, phone, sureName, year } = currentUser;

  const getMonthName = useMemo(() => {
    return monthOptions.find((el) => el.value === Number(month))?.name;
  }, [currentUser]);

  const onFinish = (values: IAuth) => {
    const avatar = imageUrl || currentUser.avatar;
    dispatch(setUser({ ...currentUser, ...values, avatar }));
    closeEditUserInfo();
  };

  const onReset = useCallback(() => {
    form.setFieldsValue({
      ...currentUser,
      month: getMonthName,
    });
  }, [currentUser, getMonthName]);

  return (
    <Drawer
      title={t('edit_user_info')}
      placement='right'
      onClose={closeEditUserInfo}
      open={showEditDrawer}
      width={isMobile ? 240 : ''}
    >
      <Form
        form={form}
        className={s.Form}
        name='EditUserInformation'
        style={{ height: '-webkit-fill-available' }}
        initialValues={{
          sureName: sureName,
          name: name,
          lastName: lastName,
          day: Number(day),
          month: getMonthName,
          year: year,
          phone: phone,
          gender: gender,
          avatar: avatar,
        }}
        onFinish={onFinish}
        layout='vertical'
        requiredMark={false}
      >
        <div>
          <Form.Item
            name='sureName'
            label={t('surname')}
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('surname')} />
          </Form.Item>

          <Form.Item
            name='name'
            label={t('name')}
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('name')} />
          </Form.Item>

          <Form.Item
            name='lastName'
            label={t('middle_name')}
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('middle_name')} />
          </Form.Item>

          <div>{t('date_of_birth')}</div>

          <Row gutter={12}>
            <Col span={8}>
              <Form.Item
                name='day'
                rules={[
                  { required: true, message: t('required_field') },
                  { type: 'number', max: 31, min: 1 },
                ]}
              >
                <InputNumber style={{ width: '100%' }} min={1} max={31} placeholder={t('day')} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                className={s.month}
                name='month'
                rules={[{ required: true, message: t('required_field') }]}
              >
                <Select placeholder={t('month')}>
                  {monthOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item name='year' rules={[{ required: true, message: t('required_field') }]}>
                <Select placeholder={t('year')}>
                  {yearOptions().map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name='phone'
            label={t('phone')}
            rules={[{ required: true, message: t('number_not_exist') }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value?: number | string) => (value ? value.toString().slice(0, 8) : '')}
              addonBefore='(+373)'
              placeholder={t('phone')}
            />
          </Form.Item>

          <Form.Item
            name='gender'
            label={t('gender')}
            rules={[{ required: true, message: t('required_field') }]}
          >
            <Select placeholder={t('floor')}>
              {genderOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <UploadImage />
        </div>

        <div className={s.formFooter}>
          <Divider />

          <div className={s.btnWrapper}>
            <Button className={s.reset} onClick={onReset}>
              {t('cancellation')}
            </Button>

            <Button className={s.submit} type='primary' htmlType='submit'>
              {t('change_info')}
            </Button>
          </div>
        </div>
      </Form>
    </Drawer>
  );
};
