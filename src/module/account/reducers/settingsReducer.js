import updateObject from '../../../utility/updateObject';
import { ADD_SETTINGS, REMOVE_SETTINGS } from '../constants/settingsConstants';

function settings(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_SETTINGS:
      return updateObject(state, payload);
    case REMOVE_SETTINGS:
      return updateObject(state, {
        bodyName: null,
        curFormat: null,
        dimFormat: null,
        folderName: null,
        ipadUsers: null,
        url: null,
        uses3: null
      });
    default:
      return state;
  }
}

export default settings;
