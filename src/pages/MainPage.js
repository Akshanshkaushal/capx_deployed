import React from 'react';
import StockList from '../components/StockList'; 
import Navbar from '../components/Navbar';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <StockList />
      </div>
    </div>
  );
};

export default MainPage;
