import serverMessage from './serverMessage';

function stringInject(str, data) {
  if (typeof str === 'string' && data instanceof Array) {
    return str.replace(/({\d})/g, function (i) {
      return data[i.replace(/{/, '').replace(/}/, '')];
    });
  } else {
    return false;
  }
}

const handleServerMessage = error => {
  const { messages } = error;
  let message = serverMessage[messages[0].errorcode];
  if (messages[0].args) {
    message = stringInject(message, messages[0].args);
  }
  return message;
};

export default handleServerMessage;
