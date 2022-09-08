import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import s from './WidgetWrapper.module.scss';

interface IWidgetWrapper {
  title: string;
  description?: string;
  children: JSX.Element;
  onClickFooter: () => void;
  enableFooter: boolean;
  width?: number;
}

export const WidgetWrapper: FC<IWidgetWrapper> = (data) => {
  const { title, description, children, onClickFooter, enableFooter = true, width = 289 } = data;
  const { t } = useTranslation();
  return (
    <div className={s.WidgetWrapper} style={{ width: width }}>
      {data ? (
        <>
          <div className={s.WidgetWrapper__header}>{title}</div>
          <div className={s.WidgetWrapper__description}>{description}</div>
          <div className={s.WidgetWrapper__body} style={{ marginBottom: enableFooter ? 0 : 20 }}>
            {children ? children : <div>Empty Data</div>}
          </div>
          {enableFooter && (
            <div className={s.WidgetWrapper__footer} onClick={onClickFooter}>
              {t('see_all')}
            </div>
          )}
        </>
      ) : (
        <div>Empty Data</div>
      )}
    </div>
  );
};
