import React,{useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TopFooter from './components/TopFooter/TopFooter';
import Homepage from './pages/Homepage/Homepage';

function App() {



  return (
    <div>
       <Header />
       <Homepage />
       <TopFooter />
       <Footer />
    </div>
  );
}

export default App;
