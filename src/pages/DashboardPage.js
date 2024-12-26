import React from 'react';
import PortfolioDashboard from '../components/PortfolioDashboard';
import StockHoldingList from '../components/StockHoldingList';
import Navbar from '../components/Navbar';
 

const DashboardPage = () => (
  <div>
    <Navbar />
    <div className="p-4">
      <PortfolioDashboard />
      <StockHoldingList />
    </div>
  </div>
);

export default DashboardPage;
