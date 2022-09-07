import React, { useMemo } from 'react';
import { WidgetWrapper } from '../../../../common/components/WidgetWrapper/WidgetWrapper';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../../types';
import { homeSlice } from '../../HomeSlice';

import s from './widgets.module.scss';

const { setPressedLocation } = homeSlice.actions;

export const InvoiceWidget = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { invoicesData } = useAppSelector((state) => state.homeReducer);
  const bankSum = useMemo(
    () => invoicesData[0].reduce((acc, el) => acc + Number(el.amountFunds), 0),
    [invoicesData]
  );
  const internetBankSum = useMemo(
    () => invoicesData[1].reduce((acc, el) => acc + Number(el.amountFunds), 0),
    [invoicesData]
  );

  return (
    <WidgetWrapper
      title={t('invoices')}
      description={t('level_remaining')}
      onClickFooter={() => {
        navigate(routes.invoices);
        dispatch(setPressedLocation('invoices'));
      }}
      enableFooter={true}
    >
      <div className={s.widgetTable}>
        <span className={s.title}>{t('remaining_bank')}:</span>
        <br />
        <span className={s.value}>{bankSum}$</span>
        <div className={s.divider} />
        <br />
        <span className={s.title}>{t('remaining_internet')}:</span>
        <br />
        <span className={s.value}>{internetBankSum}$</span>
      </div>
    </WidgetWrapper>
  );
};
