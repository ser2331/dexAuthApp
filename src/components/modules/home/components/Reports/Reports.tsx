import React, { useCallback, useMemo } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { Button, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';

import 'react-jinke-music-player/assets/index.css';
import s from './Reports.module.scss';
import { PageHeader } from '../../../../common/components/PageHeader/PageHeader';

const audio = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: 'http://localhost:3002/loadSound',
  },
];

export const Reports = () => {
  const { t } = useTranslation();

  const { reportsData } = useAppSelector((state) => state.homeReducer);

  const onClick = useCallback(async () => {
    const blob = await fetch('http://localhost:3002/loadSound').then((res) => res.blob()); // blob just as yours
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'Despacito.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const columns = useMemo(
    () => [
      { title: 'Описание', dataIndex: 'description' },
      { title: 'Категория', dataIndex: 'category' },
      { title: 'Кол-во', dataIndex: 'amount' },
      { title: 'Цена', dataIndex: 'expectedPrice' },
      { title: 'Стоимость', dataIndex: 'price' },
      {
        title: 'Музыка',
        dataIndex: 'music',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render: (_: '@typescript-eslint/no-explicit-any') => {
          return (
            <Button type='primary' shape='round' onClick={onClick} icon={<DownloadOutlined />} />
          );
        },
      },
    ],
    []
  );

  return (
    <div className={s.Reports}>
      <PageHeader title={t('reports')} breadcrumb={[t('reports')]} />

      <ReactJkMusicPlayer
        showPlayMode={false}
        className={s.player}
        audioLists={audio}
        autoPlay={true}
        showDownload={false}
      />

      <Table className={s.tableWrapper} columns={columns} dataSource={reportsData} bordered />
    </div>
  );
};
