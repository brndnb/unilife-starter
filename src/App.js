import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TopFooter from './components/TopFooter/TopFooter';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeeAllCities from './pages/SeeAllCities/SeeAllCities';
import CityDetails from './pages/CityDetails/CityDetails';

function App() {



  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/seeallcities" element={<SeeAllCities />} />
          <Route path='/citydetails/:cityId' element={<CityDetails />} />
        </Routes>
        <TopFooter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
