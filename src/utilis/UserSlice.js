import { createSlice } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

const UserSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default userEvent.reducer;