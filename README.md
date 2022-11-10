# AWS Lambda with Layer
Demo of an AWS lambda function that uses layers via Serverless Framework. When deployed the function can be reached with a GET request to the listed endpoint, and will return today's date using `moment()`, which is in a layer rather than in the function package itself.

The lambda and the layer deploys are in separate folders to save redeploying the layers on every lambda deploy. You should run `npm install` in the particular layer module before deploying - in this example, `cd` into `./layers/moment-layer` then run `npm install`, then `cd` back to `./layers` and run `sls deploy`, assuming you have `serverless` installed globally.

The lambda can be deployed by `cd`-ing into `./lambda` and running `sls deploy`. A `.env` file is needed with a `LAYER_ARN=` value to reference the `arn` of the deployed layer.
