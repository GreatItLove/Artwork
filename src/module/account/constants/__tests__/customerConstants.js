import * as constants from '../customerConstants';

describe('Customer constants', () => {
  it('Should be defined ADD_CUSTOMER', () => {
    expect(constants.ADD_CUSTOMER).toBeDefined();
  });
  it('Should be defined REMOVE_CUSTOMER', () => {
    expect(constants.REMOVE_CUSTOMER).toBeDefined();
  });
});
