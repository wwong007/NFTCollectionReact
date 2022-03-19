// REACT
import React from 'react';

// MODEL
import { NFTCollectionI } from '../../../models/NFTCollection/NFTCollection.model';
import { DataPropI } from '../../../models/Props/props.models';

// COMPONENTS
import CollectionTable from '../../Collection/CollectionTable';
import UtilBar from '../../UtilBar/UtilBar';
import PageBody from '../PageBody';

// HANDLER
import { handleSearchData } from '../../../handlers/handleSearchData';


export default function CollectionPage(props: DataPropI<NFTCollectionI>) {
  const { data } = props
  const [filteredData, setFilteredData] = React.useState(data);
  const [isSearch, setIsSearch] = React.useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleSearchData<NFTCollectionI>(data, event, setFilteredData)
    setIsSearch(true);
  }
  
  return (
    <div className='Main-Body'>
      <PageBody
        components={[
        <UtilBar handleSearch={handleSearch}/>, 
        <CollectionTable data={isSearch ? filteredData : data}/>
      ]}
      />
    </div>
  )
}