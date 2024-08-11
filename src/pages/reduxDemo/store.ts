import {
  Action,
  configureStore,
  createAsyncThunk,
  Dispatch,
  Store,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    todoAdded(state, action) {
      state.todos.push({
        ...action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteTodo.pending, (state, action) => {
        console.log(action);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(
          (item) => item.name !== action.payload
        );
      });
  },
});

export const { todoAdded } = todosSlice.actions;

const logger = (store: Store) => (next: Dispatch) => (action: any) => {
  console.log(action.type);
  console.log(action.payload);
  next(action);
  console.log(store.getState());
};

const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    await wait();
    return id;
  }
);

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(logger);
  },
});
