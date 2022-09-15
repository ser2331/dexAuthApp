import React, { useCallback, useMemo, useState } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { Button, PaginationProps, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../../../common/components/PageHeader/PageHeader';
import { CustomPagination } from '../../../../common/components/CustomPagination/CustomPagination';
import { getVisibleItems } from '../../halpers/halpers';
import { IReportsData } from '../../interfaces/interfaces';
import { ReportCardMobile } from './ReportCartMobile/ReportCardMobile';
import Types from '../../../../types';

import 'react-jinke-music-player/assets/index.css';
import s from './Reports.module.scss';

const { appSizesMap } = Types;

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

  const [currentPage, setCurrentPage] = useState(1);

  const { reportsData } = useAppSelector((state) => state.homeReducer);
  const { size } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;

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

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  const { visibleItems, pageNumber } = getVisibleItems({
    data: reportsData,
    currentPage,
    perPage: 5,
  });

  return (
    <div className={s.Reports}>
      <PageHeader title={t('reports')} breadcrumb={[t('reports')]} />

      {!isMobile ? (
        <>
          <ReactJkMusicPlayer
            showPlayMode={false}
            className={s.player}
            audioLists={audio}
            autoPlay={true}
            showDownload={false}
          />

          <Table className={s.tableWrapper} columns={columns} dataSource={reportsData} bordered />
        </>
      ) : (
        <>
          {visibleItems.length &&
            visibleItems.map((el: IReportsData) => (
              <div key={el.key}>
                <ReportCardMobile item={el} columns={columns} onClick={onClick} />
              </div>
            ))}
          <CustomPagination
            currentPage={currentPage}
            onChangePage={onChangePage}
            pageNumber={pageNumber}
            size='small'
          />
        </>
      )}
    </div>
  );
};
