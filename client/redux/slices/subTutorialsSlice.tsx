import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TutorialState {
  value: object;
}

const initialState: TutorialState = {
  value: {},
};

export const subTutorialsSlice = createSlice({
  name: "subtutorials",
  initialState,
  reducers: {
    setSubTutorial: (state, action: PayloadAction<object>) => {
      state.value = action.payload;
      console.log(state);
    },
  },
});

export const { setSubTutorial } = subTutorialsSlice.actions;

export default subTutorialsSlice.reducer;
