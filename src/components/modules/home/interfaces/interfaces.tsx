import React from 'react';

export interface IReportsData {
  description: string;
  category: string;
  amount: number;
  expectedPrice: number;
  price: number;
  key: number;
}
export interface IItem {
  key: string;
  name: string;
  accountNumber: number;
  address: string;
  amountFunds: string;
}
export interface IPlanning {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
  important: string;
}
export interface IEditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'text';
  record: IItem;
  index: number;
  children: React.ReactNode;
}
