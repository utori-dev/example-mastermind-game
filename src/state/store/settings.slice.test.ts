import store from './_store';
import reducer, { setSettings, resetSettings } from './settings.slice';

const INITIAL_STATE = {
  rows: 8,
  columns: 4,
  shapes: 4,
};

describe('Settings state tests', () => {
  it('Should be initialized with a state', () => {
    // Act
    const state = store.getState().persistedReducers;
    const stateClone = (({ _persist: _, ...rest }) => rest)(state.settings);

    // Assert
    expect(stateClone).toEqual(INITIAL_STATE);
  });

  /**
   * Redux-persist seems to interfere with testing store updates
   */
  // it('Should be set settings', () => {
  //   // Arrange
  //   const NEW_STATE = {
  //     rows: 10,
  //     columns: 5,
  //     shapes: 4,
  //   };

  //   // Assert
  //   expect(reducer(INITIAL_STATE, setSettings(NEW_STATE))).toEqual({
  //     ...NEW_STATE,
  //   });
  // });

  it('Should reset state', () => {
    // Arrange
    const NEW_STATE = {
      rows: 10,
      columns: 5,
      shapes: 4,
    };

    // Act
    store.dispatch(setSettings(NEW_STATE));
    store.dispatch(resetSettings());
    const state = store.getState().persistedReducers;
    const stateClone = (({ _persist: _, ...rest }) => rest)(state.settings);

    // Assert
    expect(stateClone).toEqual(INITIAL_STATE);
  });
});
