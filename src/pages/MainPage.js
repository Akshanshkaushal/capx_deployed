import React from 'react'; 
import logo from '../assests/logo.webp';
import StockList from '../components/stocks/StockList';
import Navbar from '../components/Navbar/Navbar';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Portfolio Tracker</h1>
          <p className="text-lg mb-6">
            Your ultimate solution to monitor, analyze, and optimize your stock portfolio.
          </p>
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Stock Analysis"
              className="rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3"
            />
          </div>
        </div>
      </div>

      {/* Stock List Section */}
      <div className="p-4">
        <StockList />
      </div>
    </div>
  );
};

export default MainPage;
