import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import { PageHeader } from '../../../../common/components/PageHeader/PageHeader';
import FakeData from '../../../../../FakeData';

import s from './Help.module.scss';

const { helpData } = FakeData;
const data = helpData;

export const Help = () => {
  return (
    <div className={s.Help}>
      <PageHeader title={'Help & Contact'} breadcrumb={[]} width={'100%'} />

      <div className={s.body}>
        <Row gutter={[16, 80]}>
          {data.map((el) => (
            <Col className={s.card} key={el.id} span={8}>
              <div>{el.label}</div>
              <Tooltip placement='topLeft' title={el.description}>
                <img src={el.image} alt={el.label} />
              </Tooltip>
            </Col>
          ))}
        </Row>
      </div>
      <footer className={s.footer}>
        <div className={s.title}>@StaffPro</div>
      </footer>
    </div>
  );
};
