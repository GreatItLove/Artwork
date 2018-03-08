import customerReducer from '../customerReducer';
import { addCustomer, removeCustomer } from '../../actions/customerActions';
import initialState from '../../../../store/initialState';

describe('Customer Reducer', () => {
  const customerState = initialState.customer;
  const data = {
    active: true,
    customerId: 123,
    customerType: 'Suport',
    email: 'anuj@gmail.com',
    logo3: 'logo.png',
    logoIpad: 'logo.png',
    organization: 'Demo Galaery',
    phone: '45646-5464',
    siteAdministrator: 'Some name'
  };
  it('Add customer', () => {
    const newState = customerReducer(customerState, addCustomer(data));
    const expectedState = { ...customerState, ...data };
    expect(newState).toEqual(expectedState);
  });
  it('Remove customer', () => {
    const oldState = { ...customerState, ...data };
    const newState = customerReducer(oldState, removeCustomer());
    expect(newState).toEqual(customerState);
  });
});
