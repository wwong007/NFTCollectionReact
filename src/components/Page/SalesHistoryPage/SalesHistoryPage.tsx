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
import { handleSearchData } from '../../../handlers/handleSearchData';

export default function SalesHistoryPage(props: DataPropI<NFTCollectionI>) {
  const { data } = props;
  const infoBarData: InfoBarPropI = calculateInfoBarData(data);
  const [filteredData, setFilteredData] = React.useState(data);
  const [isSearch, setIsSearch] = React.useState(false)

  const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    handleSearchData<NFTCollectionI>(data, event, setFilteredData);
    setIsSearch(true)
  }
  return (
    <div className='Main-Body'>
      <PageBody
        components={[
        <SalesHistoryInfoBar data={infoBarData} handleSearch={handleSearch}/>, 
        <SalesHistoryTable data={isSearch ? filteredData : data}/>]}
      />
    </div>
  )
}