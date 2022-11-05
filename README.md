# AWS Lambda with Layer
Demo of an AWS lambda function that uses layers via Serverless Framework. When deployed the function can be reached with a GET request to the listed endpoint, and will return today's date using `moment()`, which is in a layer rather than in the function package itself.

At the moment the layer will be redeployed with every function deploy which isn't ideal. The layer should be a separate `serverless` deploy. This serves as a demo for reference though.

### TODO
- Separate layer into different deployment repo

