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
      console.log("SET THE STATE OF TUTORIALS");
      state.value = action.payload;
    },
  },
});

export const { setTutorial } = tutorialSlice.actions;

export default tutorialSlice.reducer;
