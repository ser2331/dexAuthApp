import React from 'react';
import { Button } from 'antd';
import { authorizationSlice } from '../../../authorization/AuthorizationSlice';
import { useAppDispatch } from '../../../../core/redux';

import s from './Settings.module.scss';

const { setIsAuth } = authorizationSlice.actions;

export const Settings = () => {
    const dispatch = useAppDispatch();

    const logOut = () => {
        window.localStorage && window.localStorage.setItem('LOGIN', JSON.stringify(''));
        window.localStorage && window.localStorage.setItem('PASSWORD', JSON.stringify(''));
        dispatch(setIsAuth(false));
    };
    
    return (
        <div className={s.Settings}>
            <Button onClick={logOut}>Log Out</Button>
        </div>
    )
};