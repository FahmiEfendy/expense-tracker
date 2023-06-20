import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false, onEdit: "", editId: null };

export const editStateSlice = createSlice({
  name: "editState",
  initialState,
  reducers: {
    onEditState: (state, action) => {
      state.value = true;
      state.onEdit = action.payload.onEdit;
      state.editId = action.payload.editId;
    },
    offEditState: (state) => {
      state.value = false;
      state.onEdit = "";
      state.editId = null;
    },
  },
});

export const { onEditState, offEditState } = editStateSlice.actions;

export default editStateSlice.reducer;
