import { createSlice } from '@reduxjs/toolkit';
import fetchCoins from '../ConsumeAPI/consumeAPI';

const initialState = [];
export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, action) => action.payload.data.map((coin) => ({
      name: coin.name,
      symbol: coin.symbol,
      rank: coin.rank,
      id: coin.nameid,
      price: coin.price_usd,
      percent_change_24h: coin.percent_change_24h,
      percent_change_1h: coin.percent_change_1h,
      percent_change_7d: coin.percent_change_7d,
      price_btc: coin.price_btc,
      market_cap_usd: coin.market_cap_usd,
      volume24: coin.volume24,
      volume24a: coin.volume24a,
      csupply: coin.csupply,
    })));
  },
});

export default coinsSlice.reducer;
