import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk
export const fetchTask = createAsyncThunk(
  "task/fetch",
  async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=3"
    );
    const data = await res.json();
    return data.map((item) => item.title);
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
    isLoading: false,
  },
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (_, index) => index !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.task.push(...action.payload);
      })
      .addCase(fetchTask.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export const store = configureStore({
  reducer: {
    taskReducer: taskSlice.reducer,
  },
});
