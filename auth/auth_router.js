const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users_model');
const secrets = require('../config/secrets');

// for endpoints beginning with /auth
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;

  Users.addUser(user)
    .then(saved => {
      res.status(201).json({message: "new user has been saved"});
    })
    .catch(error => {
      res.status(500).json({message: "There is an error registering new user"});
    });
});

//need to send: name, username, PW, points ^^^

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first() //without first() the user is returned but in an array
    .then(user => {
      console.log("user", user)
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          name: user.name,
          points: user.points,
          token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    // subject is normally the user's id (who/what the token describes)
    subject: user.id, // translates unto the "sub" property on the token
    username: user.username,
    name: user.name,
    points: user.points,
  };
  const options = {
    expiresIn: '7d',
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}



module.exports = router;