'use strict';

const moment = require('moment');

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Today is ${moment()}`,
      },
      null,
      2
    ),
  };
};
