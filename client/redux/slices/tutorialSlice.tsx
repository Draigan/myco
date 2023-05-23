import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TutorialState {
  value: object;
}

const initialState: TutorialState = {
  value: {},
};

export const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {
    setTutorial: (state, action: PayloadAction<object>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTutorial } = tutorialSlice.actions;

export default tutorialSlice.reducer;
