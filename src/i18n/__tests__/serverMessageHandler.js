import serverMessage from '../serverMessage';
import serverMessageHandler from '../serverMessageHandler';

describe('Error Server Message Handler', () => {
  it('Should generate message from error without args', () => {
    const error = {
      messages: [
        {
          errorcode: 'AWM103',
          severity: 12
        }
      ],
      status: {
        code: 12
      }
    };
    const message = serverMessageHandler(error);
    expect(message).toEqual(serverMessage[error.messages[0].errorcode]);
  });
  it('Should generate message from error with args', () => {
    const error = {
      messages: [
        {
          errorcode: 'AWM121',
          severity: 12,
          args: [50]
        }
      ],
      status: {
        code: 12
      }
    };
    const message = serverMessageHandler(error);
    expect(message).toEqual('Field length must be less than 50 characters');
  });
});
