import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    replaceFetchedData(state, action) {
      state.tasks = action.payload;
    },
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    toggleTask(state, action) {
      const toggleIndex = state.tasks.findIndex(
        (item) => item.id === action.payload
      );
      state.tasks[toggleIndex].isDone = !state.tasks[toggleIndex].isDone;
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
