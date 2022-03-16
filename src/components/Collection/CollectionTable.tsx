// REACT
import React from 'react'

// COMPONENT
import DataTable from "../../core/Table/DataTable";

// MODELS
import { NFTCollectionI } from "../../models/NFTCollection/NFTCollection.model";
import { DataPropI } from '../../models/Props/props.models';

// FACTORY FUNCTION
import { CollectionRowI, generateNFTCollectionRow } from "../../utils/nftCollection.factory"

// CONSTANT
import { CollectionTableColumns } from '../../constants/TableColumns';



export default function CollectionTable(props: DataPropI<NFTCollectionI>) {
  const rows: CollectionRowI[] = generateNFTCollectionRow(props.data);
  return(
    <>
      <DataTable<CollectionRowI>
        rows={rows}
        columns={CollectionTableColumns}
      />
    </>
  )
}