import React from 'react';
import { Breadcrumb, Table } from 'antd';
import { useAppSelector } from '../../../../core/redux';
import Types from '../../../../types';

import s from './Reports.module.scss';

const { reportsTableColumns } = Types;

export const Reports = () => {
    const { reportsData } = useAppSelector(state => state.homeReducer);

    return (
        <div className={s.Reports}>
            <div className={s.header}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Reports</Breadcrumb.Item>
                </Breadcrumb>
                <div className={s.title}>
                    Reports
                </div>
            </div>

            <Table className={s.tableWrapper} columns={reportsTableColumns} dataSource={reportsData} bordered />
        </div>
    )
};