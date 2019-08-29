const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users_model');
const secrets = require('../config/secrets');

// for endpoints beginning with /auth
router.post('/register', (req, res) => {
  let user = req.body;

  if (!user) {
    return res.status(400).json({message: 'new user did not supply required arguments'})
  }

  if (!user.name) {
    return res.status(400).json({message: `please enter a name for the new user`})
  }

  if (!user.username) {
    return res.status(400).json({message: `please enter a username for the new user`})
  }

  if (!user.password) {
    return res.status(400).json({message: `please enter a password for the new user`})
  }

  if (!user.points) {
    return res.status(400).json({message: `please enter new user's points`})
  }

  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;

  Users.addUser(user)
    .catch(error => {
      usernameTaken = "SQLITE_CONSTRAINT: UNIQUE constraint failed: users.username"
      if (error.toString().includes(usernameTaken)) {
        return res.status(500).json({message: `the username ${user.username} has been taken`})
      }
      return res.status(500).json({message: `error adding new user: ${error}`});
    })
    .then(() => {
      res.status(201).json({
        message: `new user ${user.username} has been saved`,
        name: user.name,
        username: user.username,
        points: user.points,
      });
    })
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .catch(error => {
      res.status(500).json(error);
    })
    .then(users => {
      if (users.length === 0) {
        return res.status(404).json({message: `could not find user with username of ${username}`})
      }

      const user = users[0]

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'password incorrect' });
      }

      const token = generateToken(user);

      res.status(200).json({
        message: `Welcome ${user.username}!`,
        id: user.id,
        name: user.name,
        points: user.points,
        token,
      });
    })
});

function generateToken(user) {
  const payload = {
    subject: user.id, 
    username: user.username,
    name: user.name,
    points: user.points,
  };
  const options = {
    expiresIn: '10d',
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}



module.exports = router;