import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import authReducer from '../features/auth/authSlice';
import { loadState} from './browserStorage';


export const store = configureStore({
  reducer: {
    game: gameReducer,
    auth: authReducer,
  },
  preloadedState: loadState(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
