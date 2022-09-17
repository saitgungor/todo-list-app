import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    showStartingScreen: true,
    isFetchinDone: false,
    showError: false,
  },
  reducers: {
    replaceFetchedData(state, action) {
      state.tasks = action.payload;
      state.isFetchinDone = true;
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

    editTask(state, action) {
      const editIndex = state.tasks.findIndex(
        (item) => item.id === action.payload.id
      );
      state.tasks[editIndex].content = action.payload.content;
    },
    showError(state, action) {
      state.showError = action.payload;
    },
    closeStartingScreen(state) {
      console.log("here");
      state.showStartingScreen = false;
    },
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
