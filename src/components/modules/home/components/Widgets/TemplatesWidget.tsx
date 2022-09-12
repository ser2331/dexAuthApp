import React, { useMemo } from 'react';
import { WidgetWrapper } from '../../../../common/components/WidgetWrapper/WidgetWrapper';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../../types';
import { homeSlice } from '../../HomeSlice';
import { Progress } from 'antd';
import { getDays, getPercents } from '../../halpers/halpers';

import s from './widgets.module.scss';

const { setPressedLocation } = homeSlice.actions;

export const TemplatesWidget = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { templatesData } = useAppSelector((state) => state.homeReducer);

  const widgetData = useMemo(() => {
    return {
      relaxation: {
        percent: getPercents(templatesData.allTime, templatesData.relaxation.all),
        days: getDays(templatesData.relaxation.all),
      },
      entertainment: {
        percent: getPercents(templatesData.allTime, templatesData.entertainment.all),
        days: getDays(templatesData.entertainment.all),
      },
    };
  }, [templatesData]);

  return (
    <WidgetWrapper
      title={t('templates')}
      description={t('templates')}
      onClickFooter={() => {
        navigate(routes.templates);
        dispatch(setPressedLocation('templates'));
      }}
      enableFooter={true}
      width={588}
      height={320}
    >
      <div className={s.widgetTable}>
        <div className={s.Templates__header}>
          <div className={s.top}>
            <div className={s.title}>{t('vacation')}</div>
            <div className={s.title}>{`- ${getDays(templatesData.allTime)} ${t('days')}`}</div>
          </div>

          <Progress percent={100} showInfo={false} />
        </div>

        <div className={s.Templates__content}>
          <div className={s.row}>
            <div className={s.title}>{t('relaxation')}</div>
            <div className={s.title}>{`${widgetData.relaxation.days} ${t('days')}`}</div>
            <Progress percent={widgetData.relaxation.percent} type='dashboard' />
          </div>

          <div className={s.row}>
            <div className={s.title}>{t('entertainment')}</div>
            <div className={s.title}>{`${widgetData.entertainment.days} ${t('days')}`}</div>
            <Progress percent={widgetData.entertainment.percent} type='dashboard' />
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
