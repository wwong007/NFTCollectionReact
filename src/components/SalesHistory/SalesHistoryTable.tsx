// REACT
import React from 'react'

// MODELS
import { NFTCollectionI } from "../../models/NFTCollection/NFTCollection.model";
import { DataPropI } from "../../models/Props/props.models";

// COMPONENT
import DataTable from "../../core/Table/DataTable";

// CONSTANT
import { SalesHistoryTableColumns } from '../../constants/TableColumns';

// FACTORY FUNCTION
import { generateSalesHistoryTableRows, SalesHistoryRowI } from "../../utils/salesHistory.factory";



export default function SalesHistoryTable (props: DataPropI<NFTCollectionI>) {
  const rows: SalesHistoryRowI[] = generateSalesHistoryTableRows(props.data);

  return (
    <>
      <DataTable
        rows={rows}
        columns={SalesHistoryTableColumns}
      />
    </>
  )
}