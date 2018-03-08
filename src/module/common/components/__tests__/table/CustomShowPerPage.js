import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CustomShowPerPage from '../../table/CustomShowPerPage';
import initialState from '../../../../../store/initialState';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const store = configureMockStore()({ initialState });
const props = {
  pagination: { currentPage: 1, totalRecordCount: 0, recordsPerPage: "10", },
  appDispatch: jest.fn(),
  searchFilter: {
    limit: 10,
    search: 'test',
  },
};
describe('Snapshot of Custom Show Per Page', () => {
  it('CustomShowPerPage', () => {
    const wrapper = shallow(
      <provider store={store}>
        <CustomShowPerPage {...props} />
      </provider>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
