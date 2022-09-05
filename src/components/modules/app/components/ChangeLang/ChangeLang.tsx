import React from 'react';
import { Button, Select } from 'antd';
import i18next from 'i18next';
import { useAppDispatch } from '../../../../core/redux';
import { appSlice } from '../../AppSlice';
import { Link } from 'react-router-dom';
import { routes } from '../../../../types';
import { GlobalOutlined, CloseOutlined } from '@ant-design/icons';

import s from './ChangeLang.module.scss';

const { Option } = Select;
const { showLangMenu } = appSlice.actions;

export const ChangeLang = () => {
    const dispatch = useAppDispatch();
    
    const handleChange = (lang: string) => {
        return i18next.changeLanguage(lang)
    };

    return (
        <div className={s.ChangeLang} >
            <div className={s.content}>
                <span className={s.description}>
                    <GlobalOutlined /> Сменить язык на <Link to={routes.login}>english?</Link>
                </span>

                <Select
                    defaultValue={i18next.language}
                    style={{ width: 120, color: '#1890ff' }}
                    className="change-lang"
                    onChange={handleChange}
                >
                    <Option value="ru">Русский</Option>
                    <Option value="EN">English</Option>
                </Select>
            </div>

            <div className={s.close} >
                <Button style={{ border: '0' }} onClick={() => dispatch(showLangMenu(false))}>
                    <CloseOutlined />
                </Button>
            </div>
        </div>
    );
};