import React from 'react';
import PortfolioDashboard from '../components/PortfolioDashboard';
import StockHoldingList from '../components/StockHoldingList';
import Navbar from '../components/Navbar';

const DashboardPage = () => (
  <div>
    <Navbar />
    {/* Dashboard Hero Section */}
    <div
      className="relative w-full h-[40vh] bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 text-white flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold mb-2">Your Dashboard</h1>
        <p className="text-lg">Track your performance and stay on top of the stock market.</p>
      </div>
    </div>

    {/* Dashboard Content */}
    <div className="p-4">
      <PortfolioDashboard />
      <StockHoldingList />
    </div>
  </div>
);

export default DashboardPage;
