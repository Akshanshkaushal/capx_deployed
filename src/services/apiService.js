import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const fetchPortfolio = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/portfolio`);
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return { portfolio: [], totalValue: 0 };
  }
};

export const addStock = async (stock) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/portfolio`, stock);
    return response.data;
  } catch (error) {
    console.error('Error adding stock:', error);
  }
};

export const deleteStock = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/portfolio/${id}`);
  } catch (error) {
    console.error('Error deleting stock:', error);
  }
};
