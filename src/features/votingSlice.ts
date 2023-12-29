import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CatData } from "@/lib/type";
import { fetchCatImages } from "@/services/catApi";


type InitialState = {
  catData: CatData[];
  isLoading: boolean;
}

const initialState: InitialState = {
  catData: [],
  isLoading: false
}

export const fetchCats = createAsyncThunk('voting/fetchCats', async ()=> {
  const response = await fetchCatImages()
  return response.data
})

export const votingSlice = createSlice({
  name: 'voting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCats.fulfilled, (state, action: PayloadAction<CatData[]>) => {
        state.isLoading = false,
        state.catData = action.payload
      })
  }
})

export default votingSlice.reducer