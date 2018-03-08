import { addSettings, removeSettings } from '../settingsActions';
import { ADD_SETTINGS, REMOVE_SETTINGS } from '../../constants/settingsConstants';

describe('Settings actions', () => {
  it('Should emit action for add settings', () => {
    const data = {
      property1: 'some property 1',
      property2: 'some property 2'
    };
    const action = addSettings(data);
    expect(action).toEqual({
      type: ADD_SETTINGS,
      payload: data
    });
  });
  it('Should create action for remove settings', () => {
    const action = removeSettings();
    expect(action).toEqual({
      type: REMOVE_SETTINGS
    });
  });
});
