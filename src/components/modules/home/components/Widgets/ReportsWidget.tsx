import React, { useMemo } from 'react';
import { WidgetWrapper } from '../../../../common/components/WidgetWrapper/WidgetWrapper';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Types from '../../../../types';
import { homeSlice } from '../../HomeSlice';

import s from './widgets.module.scss';

const { routingMap } = Types;
const { setPressedLocation } = homeSlice.actions;

export const ReportsWidget = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { reportsData } = useAppSelector((state) => state.homeReducer);
  const data = [...reportsData];

  const topExpenses = useMemo(() => data.sort((a, b) => b.price - a.price).slice(0, 5), [data]);

  return (
    <WidgetWrapper
      title={t('reports')}
      description={t('top_costs')}
      onClickFooter={() => {
        navigate(routingMap.get('reports').value);
        dispatch(setPressedLocation(routingMap.get('reports').key));
      }}
      enableFooter={true}
    >
      <div className={s.widgetTable}>
        {topExpenses.map((el) => {
          return (
            <div key={el.key} className={s.table}>
              <span>{el.description}</span>
              <span>{`${el.price}$`}</span>
            </div>
          );
        })}
      </div>
    </WidgetWrapper>
  );
};
