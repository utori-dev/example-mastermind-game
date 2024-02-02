import { createSlice } from '@reduxjs/toolkit';
import { setSettings } from './settings.slice';
import { SettingsState } from './types';

const INITIAL_STATE: SettingsState = {
  rows: 8,
  columns: 4,
  shapes: 4,
};

const GAME_BOARD_MATRIX = Array.from(Array(INITIAL_STATE.rows), () =>
  Array.from(Array(INITIAL_STATE.columns))
);

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    board: GAME_BOARD_MATRIX,
    currentIndex: INITIAL_STATE.rows - 1,
  },
  reducers: {
    /**
     * Will need reducers to update board matrix
     */
  },

  /**
   * Updates game board in response to settings being saved.
   * The payload is identical to the setSettings payload.
   * @param builder
   */
  extraReducers: (builder) => {
    builder.addCase(setSettings, (state, action) => {
      const { payload } = action;
      const board = Array.from(Array(payload.rows), () =>
        Array.from(Array(payload.columns))
      );

      state = {
        board,
        currentIndex: payload.rows - 1,
      };
      return state;
    });
  },
});

export default boardSlice.reducer;
