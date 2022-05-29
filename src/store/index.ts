import { configureStore } from '@reduxjs/toolkit';

import { undoableBoardsReducer } from '../features/boards/boardsSlice';

const store = configureStore({
  reducer: {
    //@ts-ignore
    boards: undoableBoardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
