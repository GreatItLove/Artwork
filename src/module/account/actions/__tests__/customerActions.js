import { addCustomer, removeCustomer } from '../customerActions';
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from '../../constants/customerConstants';

describe('Customer Actions', () => {
  it('Should create proper action for add customer', () => {
    const data = {
      property1: 'someproperty',
      property2: 'someproperty2'
    };
    const action = addCustomer(data);
    expect(action).toEqual({
      type: ADD_CUSTOMER,
      payload: data
    });
  });
  it('Shoud create proper action for remove customer', () => {
    const action = removeCustomer();
    expect(action).toEqual({
      type: REMOVE_CUSTOMER
    });
  });
});
