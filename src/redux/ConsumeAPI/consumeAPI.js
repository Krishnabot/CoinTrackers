import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const narutoURL = "https://api.jikan.moe/v3/search/anime?q=naruto";
const LOADING = "anime/naruto";
const fetchAnime = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(narutoURL);
  const { data } = response;
  const Data = Object.keys(data).map((key) => ({
    id: key,
    ...data[key][0],
  }));
  return Data;
});

export { fetchAnime };
