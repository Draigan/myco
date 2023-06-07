import { configureStore } from "@reduxjs/toolkit";
import tutorialReducer from "../slices/tutorialSlice";
import subtutorialsReducer from "../slices/subTutorialsSlice";

export const store = configureStore({
  reducer: {
    tutorial: tutorialReducer,
    subtutorial: subtutorialsReducer,
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
