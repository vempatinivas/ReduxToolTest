import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import todosReducer from './features/todos/todosSlice';
import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    user: userReducer,
  },
});


export default store;
export type RootState = ReturnType<typeof store.getState>;