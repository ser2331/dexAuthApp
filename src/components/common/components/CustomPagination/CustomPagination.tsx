import React, { FC } from 'react';
import { Pagination } from 'antd';

import s from './CustomPagination.module.scss';

interface ICustomPagination {
  currentPage: number;
  onChangePage: (page: number, pageSize: number) => void;
  pageNumber: number;
  size?: 'small' | 'default';
}

export const CustomPagination: FC<ICustomPagination> = ({
  currentPage,
  onChangePage,
  pageNumber,
  size,
}) => {
  return (
    <div className={s.CustomPagination}>
      <Pagination current={currentPage} onChange={onChangePage} total={pageNumber} size={size} />
    </div>
  );
};
