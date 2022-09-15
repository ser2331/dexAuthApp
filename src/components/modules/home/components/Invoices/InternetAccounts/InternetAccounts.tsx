import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { PaginationProps, Select, Table, Typography } from 'antd';
import { homeSlice } from '../../../HomeSlice';
import { useAppDispatch, useAppSelector } from '../../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { IItem } from '../../../interfaces/interfaces';
import { getVisibleItems } from '../../../halpers/halpers';
import { AccountCardMobile } from '../AccountCardMobile/AccountCardMobile';
import { CustomPagination } from '../../../../../common/components/CustomPagination/CustomPagination';
import Types from '../../../../../types';

import s from './InternetAccounts.module.scss';

const { setKeyInternetAccountsData } = homeSlice.actions;
const { appSizesMap } = Types;

export const InternetAccounts = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { invoicesData, keyInternetAccountsData } = useAppSelector((state) => state.homeReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(1);

  const data = useMemo(() => invoicesData[1], [invoicesData]);
  const { size } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;

  const edit = useCallback((key: string) => {
    dispatch(setKeyInternetAccountsData(key));
  }, []);

  const cancel = useCallback(() => {
    dispatch(setKeyInternetAccountsData(''));
  }, []);

  const columns = [
    {
      title: t('nameBank'),
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
          <Typography.Link
            disabled={keyInternetAccountsData !== ''}
            onClick={() => edit(record.key)}
          >
            {t('edit')}
          </Typography.Link>
        );
      },
    },
  ];

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  const handleChangeSelect = (value: string) => {
    setPerPage(Number(value));
  };

  const { visibleItems, pageNumber } = getVisibleItems({ data, currentPage, perPage });

  useEffect(() => {
    setCurrentPage(1);
  }, [perPage]);

  return (
    <div className={s.InternetAccounts}>
      {isMobile ? (
        <>
          <Select
            defaultValue={'1'}
            onChange={handleChangeSelect}
            style={{ width: '100%', marginBottom: 16, textAlign: 'center' }}
          >
            <Select.Option value={'1'}>1</Select.Option>
            <Select.Option value={'3'}>3</Select.Option>
            <Select.Option value={'5'}>5</Select.Option>
          </Select>

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
