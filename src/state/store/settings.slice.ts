import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsState, SettingsPayload } from './types';

const INITIAL_STATE: SettingsState = {
  rows: 8,
  columns: 4,
  shapes: 4,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: { ...INITIAL_STATE },
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsPayload>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },

    resetSettings: (state) => {
      state = { ...INITIAL_STATE };
    },
  },
});

export const { setSettings, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
