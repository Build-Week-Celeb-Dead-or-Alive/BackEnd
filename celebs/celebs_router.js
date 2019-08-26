const router = require('express').Router();

const Celebs = require('./celebs_model')


router.get('/', (req, res) => {
  console.log("all celebs")
  Celebs.getAllCelebs()
  .then(pos => {
    res.status(200).json(pos)
  })
  .catch(err => res.send(err)) 
});

router.get('/:id', (req, res) => {
  let { id } = req.params;

  Celebs.findBy({ id })
    .first() //without first() the user is returned but in an array
    .then(celeb => {
      console.log("celeb", celeb)
      res.status(200).json(celeb)
    })
    .catch(error => {
      res.status(500).json("problem getting that celebrity");
    });
});

module.exports = router;