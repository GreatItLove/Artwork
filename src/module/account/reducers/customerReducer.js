import updateObject from '../../../utility/updateObject';
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from '../constants/customerConstants';

function customer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CUSTOMER:
      return updateObject(state, payload);
    case REMOVE_CUSTOMER:
      return updateObject(state, {
        active: null,
        customerId: null,
        customerType: null,
        email: null,
        logo3: null,
        logoIpad: null,
        organization: null,
        phone: null,
        siteAdministrator: null
      });
    default:
      return state;
  }
}

export default customer;
