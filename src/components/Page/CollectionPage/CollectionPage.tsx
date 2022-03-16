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
  return (
    <div className='Main-Body'>
      <PageBody
        components={[<UtilBar />, <CollectionTable data={props.data}/>]}
      />
    </div>
  )
}