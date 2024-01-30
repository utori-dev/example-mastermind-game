import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';
import { DialogState } from './types';

const INITIAL_STATE: DialogState = null;

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: INITIAL_STATE,
  reducers: {
    // @ts-ignore
    dialogOpen: (state, action: PayloadAction<Exclude<DialogState, null>>) => {
      if (isEqual(state, action.payload)) return state;
      return action.payload;
    },
    dialogClose: (state) => {
      return null;
    },
  },
});

export const { dialogOpen, dialogClose } = dialogSlice.actions;

export default dialogSlice.reducer;
