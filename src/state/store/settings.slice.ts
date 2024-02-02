import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsState } from './types';

const INITIAL_STATE: SettingsState = {
  rows: 8,
  columns: 4,
  shapes: 4,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: { ...INITIAL_STATE },
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsState>) => {
      const settings = action.payload;
      state = settings;
    },

    resetSettings: (state) => {
      state = { ...INITIAL_STATE };
    },
  },
});

export const { setSettings, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
