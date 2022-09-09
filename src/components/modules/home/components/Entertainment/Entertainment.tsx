import React, { useMemo } from 'react';
import { useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { getDays, getPercents, renderRow } from '../../halpers/halpers';

import s from './Entertainment.module.scss';

export const Entertainment = () => {
  const { t } = useTranslation();
  const { templatesData } = useAppSelector((state) => state.homeReducer);

  const data = useMemo(() => {
    return {
      all: {
        days: getDays(templatesData.allTime),
        percent: 100,
        title: t('all_time'),
      },
      entertainment: {
        days: getDays(templatesData.entertainment.all),
        percent: getPercents(templatesData.allTime, templatesData.entertainment.all),
        title: t('entertainment'),
      },
      carousels: {
        days: getDays(templatesData.entertainment.carousels),
        percent: getPercents(
          templatesData.entertainment.all,
          templatesData.entertainment.carousels
        ),
        title: t('carousels'),
      },
      race: {
        days: getDays(templatesData.entertainment.race),
        percent: getPercents(templatesData.entertainment.all, templatesData.entertainment.race),
        title: t('race'),
      },
      horseRacing: {
        days: getDays(templatesData.entertainment.horseRacing),
        percent: getPercents(
          templatesData.entertainment.all,
          templatesData.entertainment.horseRacing
        ),
        title: t('shops'),
      },
    };
  }, [templatesData, t]);

  const days = t('days');

  return (
    <div className={s.Entertainment}>
      <div className={s.contentWrapper}>
        {renderRow('all', data, days)}
        {renderRow('entertainment', data, days)}
        <div className={s.title}>{t('of_them')}:</div>
        {renderRow('carousels', data, days)}
        {renderRow('race', data, days)}
        {renderRow('horseRacing', data, days)}
      </div>
    </div>
  );
};
