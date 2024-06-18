import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../types/Phone';
import { fetchPhones } from './phonesAPI';

export interface PhonesState {
  allPhones: Phone[] | null;
  selectedPhone: Phone | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PhonesState = {
  allPhones: null,
  selectedPhone: null,
  status: 'idle',
};

export const getPhonesAsync = createAsyncThunk(
  'phones/fetchPhones',
  async() => {
    // eslint-disable-next-line no-return-await
    return await fetchPhones();
  },
);

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<Phone | null>) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedPhone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPhonesAsync.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'loading';
      })
      .addCase(getPhonesAsync.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'idle';
        // eslint-disable-next-line no-param-reassign
        state.allPhones = action.payload;
      })
      .addCase(getPhonesAsync.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'failed';
      });
  },
});

export const { setPhone } = phonesSlice.actions;
export default phonesSlice.reducer;
