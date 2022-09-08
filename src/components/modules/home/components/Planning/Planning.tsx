import React, { useState } from 'react';
import { Switch, Transfer } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { homeSlice } from '../../HomeSlice';

import s from './Planning.module.scss';

const { setTargetKeys } = homeSlice.actions;

export const Planning: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [oneWay, setOneWay] = useState(false);

  const { draftsData } = useAppSelector((state) => state.homeReducer);

  const onChange = (newTargetKeys: string[]) => {
    dispatch(setTargetKeys(newTargetKeys));
  };

  return (
    <div className={s.Planning}>
      <Transfer
        dataSource={draftsData.planning}
        targetKeys={draftsData.targetKeys}
        onChange={onChange}
        render={(item) => <div className={s[item.important]}>{item.title}</div>}
        oneWay={oneWay}
        pagination
        titles={[t('planned'), t('achieved')]}
        listStyle={{ width: '100%' }}
      />
      <br />
      <Switch
        unCheckedChildren={t('edit_list_tasks')}
        checkedChildren={t('edit_list_tasks')}
        checked={oneWay}
        onChange={setOneWay}
      />
    </div>
  );
};
