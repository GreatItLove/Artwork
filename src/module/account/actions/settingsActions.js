import { ADD_SETTINGS, REMOVE_SETTINGS } from '../constants/settingsConstants';

const addSettings = data => ({
  type: ADD_SETTINGS,
  payload: data
});

const removeSettings = () => ({
  type: REMOVE_SETTINGS
});

export { addSettings, removeSettings };
