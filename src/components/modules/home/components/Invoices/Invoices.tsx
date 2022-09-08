import React from 'react';
import { Button } from 'antd';
import { homeSlice } from '../../HomeSlice';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
import { BankAccounts } from '../BankAccounts/BankAccounts';
import { InternetAccounts } from '../InternetAccounts/InternetAccounts';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';

const { setInvoice } = homeSlice.actions;

const documentsData = (
  title: string,
  breadcrumb: string[],
  tabs: string[],
  buttonTitle: string,
  addInvoice: () => void,
  keyBankAccountsData: string
) => {
  const addInvoiceButton = () => {
    return (
      <div>
        <Button
          type='primary'
          style={{ bottom: '-60px', zIndex: 100 }}
          onClick={addInvoice}
          disabled={!!keyBankAccountsData}
        >
          {buttonTitle}
        </Button>
      </div>
    );
  };
  return {
    title: title,
    breadcrumb: breadcrumb,
    extra: addInvoiceButton(),
    tabList: [
      {
        key: 'BankAccounts',
        tab: tabs[0],
      },
      {
        key: 'InternetAccounts',
        tab: tabs[1],
      },
    ],
    contentList: {
      BankAccounts: <BankAccounts />,
      InternetAccounts: <InternetAccounts />,
    },
  };
};

export const Invoices = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { keyBankAccountsData } = useAppSelector((state) => state.homeReducer);

  const title = t('invoices');
  const breadcrumb = [t('documents'), t('invoices')];
  const tabs = [t('bank_accounts'), t('internet_accounts')];
  const buttonTitle = t('add_invoice');

  const addInvoice = () => {
    console.log('hi');
    dispatch(setInvoice());
  };

  return CustomContentWrapper(
    documentsData(title, breadcrumb, tabs, buttonTitle, addInvoice, keyBankAccountsData)
  );
};
