const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! I am using CodePipeline CodeDeploy and Elastic Beanstalk Enjoy... ---- Version 11.0.0'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
