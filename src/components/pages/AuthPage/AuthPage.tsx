import React from 'react';
import { Auth } from '../../modules/authorization/components/Auth/Auth';
import authImage from '../../assets/images/Vector.png';

import s from './AuthPage.module.scss';

export const AuthPage = () => {
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