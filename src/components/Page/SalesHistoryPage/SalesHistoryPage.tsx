import React from 'react';
import { NFTCollectionI } from '../../../models/NFTCollection/NFTCollection.model';
import { DataPropI } from '../../../models/Props/props.models';
import { calculateInfoBarData } from '../../../utils/calculateInfoBarData';
import SalesHistoryInfoBar, { InfoBarPropI } from '../../Bar/InfoBar/InfoBar';
import SalesHistoryTable from '../../SalesHistory/SalesHistoryTable';
import PageBody from '../PageBody';

export default function SalesHistoryPage(props: DataPropI<NFTCollectionI>) {
  const { data } = props;
  const infoBarData: InfoBarPropI = calculateInfoBarData(data);
  return (
    <>
      <PageBody
        components={[<SalesHistoryInfoBar data={infoBarData} />, <SalesHistoryTable data={data}/>]}
      />
    </>
  )
}