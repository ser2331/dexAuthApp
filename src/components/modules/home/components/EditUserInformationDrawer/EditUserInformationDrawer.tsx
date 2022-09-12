import React, { FC } from 'react';
import { Button, Col, Drawer, Form, Input, InputNumber, Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import s from '../../../authorization/components/RegistrationPage/RegistrationPage.module.scss';
import { IAuth } from '../../../authorization/interfaces/authorizationInterface';
import { genderOptions, monthOptions, yearOptions } from '../../../authorization/halpers/halpers';

const { Option } = Select;

interface IEditUserInformationDrawer {
  showEditDrawer: boolean;
  closeEditUserInfo: () => void;
}

export const EditUserInformationDrawer: FC<IEditUserInformationDrawer> = ({
  showEditDrawer,
  closeEditUserInfo,
}) => {
  const { t } = useTranslation();
  console.log(genderOptions);
  console.log(yearOptions());
  const onFinish = (values: IAuth) => {
    console.log(values);
  };

  return (
    <Drawer
      title={t('edit_user_info')}
      placement='right'
      onClose={closeEditUserInfo}
      open={showEditDrawer}
    >
      <Form
        className={s.AuthForm}
        name='basic'
        initialValues={{ remember: false }}
        onFinish={onFinish}
        layout='vertical'
        requiredMark={false}
      >
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

        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
          {t('save')}
        </Button>
      </Form>
    </Drawer>
  );
};
