import React from 'react';
import { NFTCollectionI } from '../../../models/NFTCollection/NFTCollection.model';
import { DataPropI } from '../../../models/Props/props.models';
import CollectionTable from '../../Collection/CollectionTable';
import UtilBar from '../../UtilBar/UtilBar';
import PageBody from '../PageBody';



export default function CollectionPage(props: DataPropI<NFTCollectionI>) {
  return (
    <>
      <PageBody
        components={[<UtilBar />, <CollectionTable data={props.data}/>]}
      />
    </>
  )
}