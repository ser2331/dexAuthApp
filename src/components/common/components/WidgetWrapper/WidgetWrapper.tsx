import React, { FC } from 'react';

import s from './WidgetWrapper.module.scss';

interface IWidgetWrapper {
    title: string;
    description?: string;
    children: JSX.Element;
    onClickFooter:() => void;
    enableFooter: boolean;
    width?: number;
}

export const WidgetWrapper: FC<IWidgetWrapper> = ({ title, description,
    children, onClickFooter, enableFooter = true, width = 289 }) => {

    return (
        <div className={s.WidgetWrapper} style={{ width: width }}>
            <div className={s.WidgetWrapper__header}>
                {title}
            </div>
            <div className={s.WidgetWrapper__description}>
                {description}
            </div>
            <div className={s.WidgetWrapper__body} style={{ marginBottom: enableFooter ? 0 : 20 }}>
                {children}
            </div>
            {enableFooter &&
                <div className={s.WidgetWrapper__footer} onClick={onClickFooter}>
                    Смотреть все
                </div>}
        </div>
    );
};
