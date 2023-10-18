import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: "profile",
  previousSection: "profile",
  messageList: [],
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.section = action.payload.section;
    },
    setPreviousSection: (state, action) => {
      state.previousSection = action.payload.previousSection;
    },
    appendMessage: (state, action) => {
      state.messageList.push(action.payload.message);
    },
    updateMessageList: (state, action) => {
      state.messageList = action.payload.newMessageList;
    },
  },
});

export const {
  setSection,
  setPreviousSection,
  appendMessage,
  updateMessageList,
} = sectionSlice.actions;
export default sectionSlice.reducer;
