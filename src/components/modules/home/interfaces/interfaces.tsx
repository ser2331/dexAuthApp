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
export interface ISchedule {
  allTime: number;
  relaxation: {
    all: number;
    salons: number;
    sea: number;
    shops: number;
  };
  entertainment: {
    all: number;
    carousels: number;
    race: number;
    horseRacing: number;
  };
  road: number;
  timeForLiving: number;
}
export interface ISchedule {
  allTime: number;
  relaxation: {
    all: number;
    salons: number;
    sea: number;
    shops: number;
  };
  entertainment: {
    all: number;
    carousels: number;
    race: number;
    horseRacing: number;
  };
  road: number;
  timeForLiving: number;
}
interface IRow {
  days: number;
  percent: number;
  title: string;
}
export interface IRest {
  all: IRow;
  relaxationAll: IRow;
  salons: IRow;
  sea: IRow;
  shops: IRow;
}
export interface IEntertainment {
  all: IRow;
  entertainment: IRow;
  carousels: IRow;
  race: IRow;
  horseRacing: IRow;
}
