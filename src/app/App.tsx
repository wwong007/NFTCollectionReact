// REACT
import React, { useEffect, useState } from 'react';

// CSS
import './App.css';

// REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// MODEL
import { NFTCollectionI } from '../models/NFTCollection/NFTCollection.model';

// COMPONENTS
import MenuAppBar from '../components/AppBar/AppBar';
import CollectionPage from '../components/Page/CollectionPage/CollectionPage';
import SalesHistoryPage from '../components/Page/SalesHistoryPage/SalesHistoryPage';

// API
import { getNFTCollection } from '../services/apis/getNFTCollectionApi';

// UTIL
import { filterCollection } from '../utils/filterCollection';

function App() {
  const [sold, setSold] = useState<NFTCollectionI[]>([]);
  const [collection, setCollection] = useState<NFTCollectionI[]>([])

  useEffect(() => {
    async function fetchCollection() {
       const response = await getNFTCollection();
       const data = filterCollection(response);
       setCollection(data.collection);
       setSold(data.sold)
    };
    fetchCollection()
  }, [])

  return (
    <div className="App">
      <Router>
        <>
          <MenuAppBar></MenuAppBar>
        </>
        <Routes>
          <Route path='/' element={<CollectionPage data={collection} />} />
          <Route path='/salesHistory' element={<SalesHistoryPage data={sold}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
