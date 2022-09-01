import React from 'react';
import authImage from '../../../../assets/images/Vector.png';
import { Auth } from '../Auth/Auth';

import s from './LoginPage.module.scss';

export const LoginPage = () => {
    return (
        <div className={s.AuthPage}>
            <div className={s.leftZone}>
                <div className={s.descriptionWrapper}>
                    <div className={s.title}>
                        Staff Pro
                    </div>

                    <div className={s.description}>
                        HR processes are automated,
                        welcome back!
                    </div>
                </div>

                <div className={s.imageWrapper}>
                    <img alt="auth" src={authImage} />
                </div>
            </div>

            <div className={s.contentWrapper}>
                <Auth />
            </div>
        </div>
    )
}