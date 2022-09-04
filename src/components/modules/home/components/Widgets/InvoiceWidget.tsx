import React, { useMemo } from 'react';
import { WidgetWrapper } from '../../../../common/components/WidgetWrapper/WidgetWrapper';
// import { Progress } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { useNavigate } from 'react-router-dom';
import Types from '../../../../types';
import { homeSlice } from '../../HomeSlice';

import s from './widgets.module.scss';


const { routingMap } = Types;
const { setPressedLocation } = homeSlice.actions;

export const InvoiceWidget = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { reportsData } = useAppSelector(state => state.homeReducer);
    const data = [... reportsData];

    // const topExpenses = useMemo(() => data.sort((a, b) => b.price - a.price), [data]).slice(0, 5);
    return (
        <WidgetWrapper
            title='Invoices'
            description='Уровень оставшихся средств'
            onClickFooter={() => {
                navigate(routingMap.get('invoices').value);
                dispatch(setPressedLocation(routingMap.get('invoices').key));
            }}
            enableFooter={true}
        >
            <div className={s.widgetTable}>
                {/*<Progress type="circle" percent={30} width={60} />*/}
                {/*<Progress type="circle" percent={70} width={60} status="exception" />*/}
                {/*<Progress type="circle" percent={100} width={60} />*/}
            </div>
        </WidgetWrapper>
    );
};