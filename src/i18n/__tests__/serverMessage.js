import servesMesssage from '../serverMessage';

describe('Server message', () => {
  for (let i = 101; i < 123; i++) {
    it(`Should has message AWM${i}`, () => {
      const index = `AWM${i}`;
      expect(servesMesssage[index]).toBeDefined();
    });
  }
});
