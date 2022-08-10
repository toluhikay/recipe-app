import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/navigation';
import MainDirectory from './components/mainDirectory/mainDirectory';
import FavoritePage from './components/favoritesPage/favoritePage';
import SearchPage from './components/popularpage/searchPage/searchPage';
import DetailsPage from './components/detailsPage/detailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<MainDirectory/>}></Route>
          <Route path='/favoritePage' element={<FavoritePage/>}></Route>
          <Route path='/searchedPage/:search' element={<SearchPage/>}></Route>
          <Route path='/recipe/:name' element={<DetailsPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
