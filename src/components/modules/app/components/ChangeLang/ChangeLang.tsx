import React, { useCallback } from 'react';
import { Button, Select } from 'antd';
import i18next from 'i18next';
import { useAppDispatch } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { appSlice } from '../../AppSlice';
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
          <GlobalOutlined /> {t('change_language_to')} <span className={s.lang}>{lang}?</span>
        </span>

        <Select defaultValue={i18next.language} className={s.ChangeLangBtn} onChange={handleChange}>
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
