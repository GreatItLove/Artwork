import settingsReducer from '../settingsReducer';
import { addSettings, removeSettings } from '../../actions/settingsActions';
import initialState from '../../../../store/initialState';

describe('Settings Reducer', () => {
  const settingsInitState = initialState.settings;
  const data = {
    bodyName: 'some value bodyname',
    curFormat: 'some value curformat',
    dimFormat: 'some value dimformat',
    folderName: 'some value foldername',
    ipadUsers: 'some value ipadusers',
    url: 'some value url',
    uses3: 'some value uses3'
  };
  it('Add settings', () => {
    const newState = settingsReducer(settingsInitState, addSettings(data));
    const expectedState = { ...settingsInitState, ...data };
    expect(newState).toEqual(expectedState);
  });
  it('Remove state', () => {
    const oldState = { ...settingsInitState, ...data };
    const newState = settingsReducer(oldState, removeSettings());
    expect(newState).toEqual(settingsInitState);
  });
});
