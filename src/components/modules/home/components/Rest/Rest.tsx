import React, { useMemo } from 'react';
import { useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { getDays, getPercents, renderRow } from '../../halpers/halpers';

import s from './Rest.module.scss';

export const Rest = () => {
  const { t } = useTranslation();
  const { templatesData } = useAppSelector((state) => state.homeReducer);

  const data = useMemo(() => {
    return {
      all: {
        days: getDays(templatesData.allTime),
        percent: 100,
        title: t('all_time'),
      },
      relaxationAll: {
        days: getDays(templatesData.relaxation.all),
        percent: getPercents(templatesData.allTime, templatesData.relaxation.all),
        title: t('relaxation'),
      },
      salons: {
        days: getDays(templatesData.relaxation.salons),
        percent: getPercents(templatesData.relaxation.all, templatesData.relaxation.salons),
        title: t('salons'),
      },
      sea: {
        days: getDays(templatesData.relaxation.sea),
        percent: getPercents(templatesData.relaxation.all, templatesData.relaxation.sea),
        title: t('sea'),
      },
      shops: {
        days: getDays(templatesData.relaxation.shops),
        percent: getPercents(templatesData.relaxation.all, templatesData.relaxation.shops),
        title: t('shops'),
      },
    };
  }, [templatesData, t]);

  const days = t('days');

  return (
    <div className={s.Rest}>
      <div className={s.contentWrapper}>
        {renderRow('all', data, days)}
        {renderRow('relaxationAll', data, days)}
        <div className={s.title}>{t('of_them')}:</div>
        {renderRow('salons', data, days)}
        {renderRow('sea', data, days)}
        {renderRow('shops', data, days)}
      </div>
    </div>
  );
};
