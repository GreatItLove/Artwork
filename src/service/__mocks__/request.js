const request = opt =>
  new Promise((resolve, reject) => {
    process.nextTick(() => {
      let response = {
        data: opt
      };
      if (opt.url === 'user/login') {
        response = {
          data: {
            response: opt
          }
        };
      }
      resolve(response);
    });
  });

export default request;
