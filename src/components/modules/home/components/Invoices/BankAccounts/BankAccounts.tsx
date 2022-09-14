import React, { useCallback, useMemo, useState } from 'react';
import { PaginationProps, Table, Typography } from 'antd';
import { homeSlice } from '../../../HomeSlice';
import { useAppDispatch, useAppSelector } from '../../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { IItem } from '../../../interfaces/interfaces';
import { AccountCardMobile } from '../AccountCardMobile/AccountCardMobile';
import { CustomPagination } from '../../../../../common/components/CustomPagination/CustomPagination';
import { getVisibleItems } from '../../../halpers/halpers';
import Types from '../../../../../types';

import s from './BankAccounts.module.scss';

const { setKeyBankAccountsData } = homeSlice.actions;
const { appSizesMap } = Types;

export const BankAccounts = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);

  const { invoicesData, keyBankAccountsData } = useAppSelector((state) => state.homeReducer);
  const { size } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;

  const data = useMemo(() => invoicesData[0], [invoicesData]);

  const edit = useCallback((key: string) => {
    dispatch(setKeyBankAccountsData(key));
  }, []);

  const cancel = useCallback(() => {
    dispatch(setKeyBankAccountsData(''));
  }, []);

  const columns = useMemo(
    () => [
      {
        title: t('name_bank'),
        dataIndex: 'name',
        width: '15%',
        editable: true,
      },
      {
        title: t('account_number'),
        dataIndex: 'accountNumber',
        width: '15%',
        editable: true,
      },
      {
        title: t('address'),
        dataIndex: 'address',
        width: '40%',
        editable: true,
      },
      {
        title: t('amount_funds'),
        dataIndex: 'amountFunds',
        width: '15%',
        editable: true,
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        render: (_: '@typescript-eslint/no-explicit-any', record: IItem) => {
          return (
            <Typography.Link disabled={keyBankAccountsData !== ''} onClick={() => edit(record.key)}>
              {t('edit')}
            </Typography.Link>
          );
        },
      },
    ],
    []
  );

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  const { visibleItems, pageNumber } = getVisibleItems({ data, currentPage, pageSize: 1 });

  return (
    <div className={s.BankAccounts}>
      {isMobile ? (
        <>
          {visibleItems.length
            ? visibleItems.map((el: IItem) => (
                <div key={el.key}>
                  <AccountCardMobile item={el} columns={columns} onEdit={edit} />
                </div>
              ))
            : ''}

          <CustomPagination
            currentPage={currentPage}
            onChangePage={onChangePage}
            pageNumber={pageNumber}
          />
        </>
      ) : (
        <Table
          bordered
          dataSource={data}
          columns={columns}
          rowClassName='editable-row'
          pagination={{
            onChange: cancel,
          }}
        />
      )}
    </div>
  );
};
