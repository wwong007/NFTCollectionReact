// REACT
import React from 'react';

// MODEL
import { NFTCollectionI } from '../../../models/NFTCollection/NFTCollection.model';
import { DataPropI } from '../../../models/Props/props.models';

// COMPONENTS
import CollectionTable from '../../Collection/CollectionTable';
import UtilBar from '../../UtilBar/UtilBar';
import PageBody from '../PageBody';



export default function CollectionPage(props: DataPropI<NFTCollectionI>) {
  const { data } = props
  const [filteredData, setFilteredData] = React.useState(data);
  const [isSearch, setIsSearch] = React.useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    const filtered = data.filter(item => {
      return (
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.id.toLowerCase().includes(value.toLowerCase())
      )
    })
    setIsSearch(true);
    setFilteredData(filtered)
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