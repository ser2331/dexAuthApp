import React, { useMemo } from 'react';
import { WidgetWrapper } from '../../../../common/components/WidgetWrapper/WidgetWrapper';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../../types';
import { homeSlice } from '../../HomeSlice';

import s from './widgets.module.scss';

const { setPressedLocation } = homeSlice.actions;

export const DraftWidget = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { draftsData } = useAppSelector((state) => state.homeReducer);
  const { planning } = draftsData;

  const impPlannings = useMemo(
    () => planning.filter((el) => el.important === 'important').slice(0, 5),
    [planning]
  );

  return (
    <WidgetWrapper
      title={t('drafts')}
      description={t('important_challenge')}
      onClickFooter={() => {
        navigate(routes.drafts);
        dispatch(setPressedLocation('drafts'));
      }}
      enableFooter={true}
    >
      <div className={s.widgetTable}>
        {impPlannings.length ? (
          <ul>
            {impPlannings.map((p) => (
              <li key={p.key} className={s.important}>
                {p.title}
              </li>
            ))}
          </ul>
        ) : (
          <div>Is Missing</div>
        )}
      </div>
    </WidgetWrapper>
  );
};
