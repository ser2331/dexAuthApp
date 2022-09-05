import React from 'react';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../core/redux';
import { homeSlice } from '../../HomeSlice';
import { WidgetWrapper } from '../../../../common/components/WidgetWrapper/WidgetWrapper';
import { ReportsWidget } from '../Widgets/ReportsWidget';
import { InvoiceWidget } from '../Widgets/InvoiceWidget';
import { routes } from '../../../../types';

import s from './Dashboard.module.scss';

const { setPressedLocation } = homeSlice.actions;

export const Dashboard = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className={s.Dashboard}>
            <div className={s.header}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div className={s.title}>
                    Dashboard
                </div>
            </div>

            <div className={s.content}>
                <ReportsWidget />

                <InvoiceWidget />

                <WidgetWrapper
                    title='Drafts'
                    onClickFooter={() => {
                        navigate(routes.drafts);
                        dispatch(setPressedLocation('drafts'));
                    }}
                    enableFooter={true}
                >
                    <div>
                        Данные отсутствуют
                    </div>
                </WidgetWrapper>

                <WidgetWrapper
                    title='Templates'
                    onClickFooter={() => {
                        navigate(routes.templates);
                        dispatch(setPressedLocation('templates'));
                    }}
                    enableFooter={true}
                    width={588}
                >
                    <div>
                        Данные отсутствуют
                    </div>
                </WidgetWrapper>
            </div>
        </div>
    );
};