import store from './_store';
import { setSettings, resetSettings } from './settings.slice';

const INITIAL_STATE = {
  rows: 8,
  columns: 4,
  shapes: 4,
};

describe('Settings state tests', () => {
  it('Should be initialized with a state', () => {
    // Act
    const state = store.getState().persistedReducers;

    // Assert
    expect(state.settings.rows).toEqual(8);
  });
});
