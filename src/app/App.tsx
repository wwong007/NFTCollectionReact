import React, { useEffect, useState } from 'react';
import * as dotenv from 'dotenv';
import BasicModal from '../components/AddNFT/Modal/AddNFTModal';
import MenuAppBar from '../components/AppBar/AppBar';
import DataTable from '../components/DataTable/DataTable';
import { getNFTCollection } from '../services/apis/getNFTCollectionApi';
import './App.css';
import { NFTCollectionI } from '../models/NFTCollection/NFTCollection.model';
import { filterCollection, FilteredCollectionI } from '../utils/filterCollection';
import { mock } from '../mockData';
import CollectionTable from '../components/Collection/CollectionTable';
import AddNFTModal from '../components/AddNFT/Modal/AddNFTModal';

// dotenv.config();

function App() {
  const [sold, setSold] = useState<NFTCollectionI[]>([]);
  const [collection, setCollection] = useState<NFTCollectionI[]>([])
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // getNFTCollection();
    const filteredData: FilteredCollectionI = filterCollection(mock);
    setSold(filteredData.sold);
    setCollection(filteredData.collection)
  }, [])
  return (
    <div className="App">
      <MenuAppBar></MenuAppBar>
      <div className='Main-Body'>
        <AddNFTModal/>
        <CollectionTable
          data={collection}
        />
      </div>
    </div>
  );
}

export default App;
