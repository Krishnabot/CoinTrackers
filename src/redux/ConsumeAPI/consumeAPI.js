import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const coinsAPI = 'https://api.coinlore.net/api/tickers/?start=0&limit=52';
const FETCHING = 'coins/fetching';
const fetchCoins = createAsyncThunk(FETCHING, async () => {
  const response = await axios.get(coinsAPI);
  return response.data;
});

export default fetchCoins;
