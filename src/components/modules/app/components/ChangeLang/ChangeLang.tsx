import React, { useCallback } from 'react';
import { Button, Select } from 'antd';
import i18next from 'i18next';
import { useAppDispatch } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { appSlice } from '../../AppSlice';
import { Link } from 'react-router-dom';
import { routes } from '../../../../types';
import { GlobalOutlined, CloseOutlined } from '@ant-design/icons';

import s from './ChangeLang.module.scss';

const { Option } = Select;
const { setShowLangMenu } = appSlice.actions;

export const ChangeLang = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleChange = useCallback((lang: string) => {
    return i18next.changeLanguage(lang);
  }, []);

  const lang = i18next.language === 'RU' ? 'english' : 'русский';

  return (
    <div className={s.ChangeLang}>
      <div className={s.content}>
        <span className={s.description}>
          <GlobalOutlined /> {t('change_language_to')} <Link to={routes.login}>{lang}?</Link>
        </span>

        <Select
          defaultValue={i18next.language}
          style={{ width: 120, color: '#1890ff' }}
          className='change-lang'
          onChange={handleChange}
        >
          <Option value='RU'>Русский</Option>
          <Option value='EN'>English</Option>
        </Select>
      </div>

      <div className={s.close}>
        <Button style={{ border: '0' }} onClick={() => dispatch(setShowLangMenu(false))}>
          <CloseOutlined />
        </Button>
      </div>
    </div>
  );
};
