import { ADD_CUSTOMER, REMOVE_CUSTOMER } from '../constants/customerConstants';

const addCustomer = data => ({
  type: ADD_CUSTOMER,
  payload: data
});

const removeCustomer = () => ({
  type: REMOVE_CUSTOMER
});

export { addCustomer, removeCustomer };
