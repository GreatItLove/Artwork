import convertTimestamp from '../convertTimestamp';

describe('Convert Timestamp utility', () => {
  it('Should convert timestamp to a human readable format', () => {
    const timeStamp = 1505204346;
    const date = convertTimestamp(timeStamp);
    expect(date).toBe('September 12, 2017 10:19 AM');
  });
});
