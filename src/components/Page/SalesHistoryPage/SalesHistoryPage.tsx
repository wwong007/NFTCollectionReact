// REACT
import React from 'react';

// MODEL
import { NFTCollectionI } from '../../../models/NFTCollection/NFTCollection.model';
import { DataPropI } from '../../../models/Props/props.models';

// COMPONENTS
import SalesHistoryInfoBar, { InfoBarPropI } from '../../Bar/InfoBar/InfoBar';
import SalesHistoryTable from '../../SalesHistory/SalesHistoryTable';
import PageBody from '../PageBody';

// UTIL
import { calculateInfoBarData } from '../../../utils/calculateInfoBarData';

export default function SalesHistoryPage(props: DataPropI<NFTCollectionI>) {
  const { data } = props;
  const infoBarData: InfoBarPropI = calculateInfoBarData(data);
  return (
    <div className='Main-Body'>
      <PageBody
        components={[<SalesHistoryInfoBar data={infoBarData} />, <SalesHistoryTable data={data}/>]}
      />
    </div>
  )
}