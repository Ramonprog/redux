import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounterState {
  counter: {
    value: number;
  };
}

const initialState: ICounterState = {
  counter: {
    value: 0,
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter.value++;
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      state.counter.value += action.payload;
    },
  },
});

export const { increment, incrementAmount } = counterSlice.actions;
export default counterSlice.reducer;
