const router = require('express').Router();

const Celebs = require('./celebs_model')


router.get('/', (req, res) => {
  Celebs.getAllCelebs()
    .catch(err => res.send(err)) 
    .then(celebs => {
      res.status(200).json(celebs)
    })
});

router.get('/:id', (req, res) => {
  let { id } = req.params;

  Celebs.findBy({ id })
    .catch(error => {
      console.log("unique error", error)
      res.status(500).json(error);
    })
    .then(celebs => {
      if (celebs.length === 0) {
        return res.status(404).json({message: `Could not find celeb with the ID of ${id}`})
      } 
      res.status(200).json(celebs[0])
    })
});

module.exports = router;