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
  },
});

export const { setSection, setPreviousSection } = sectionSlice.actions;
export default sectionSlice.reducer;
