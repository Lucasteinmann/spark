const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');
//
const { instanceLocator, key } = require('./keys');

const app = express();

// eslint-disable-next-line new-cap
const chatkit = new Chatkit.default({
  instanceLocator,
  key,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// curl -H "Content-Type: application/json" -X POST -d '{"username": "foo"}' http://localhost:3000/users
app.post('/users', (req, res) => {
  const { username } = req.body;
  chatkit
    .createUser({
      id: username,
      name: username,
    })
    .then(() => res.sendStatus(201))
    .catch((error) => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200);
      } else {
        res.status(error.status).json(error);
      }
    });
});

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id });
  res.status(authData.status).send(authData.body);
});

const PORT = 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
  } else {
    console.log(`Running on port ${PORT}`); // eslint-disable-line no-console
  }
});
