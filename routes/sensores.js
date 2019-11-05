var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET all readings. */
router.get('/', function(req, res) {
  db.sensores.findAll()
  .then((sensors)=>res.send(sensors))
  .catch((err)=>{
    console.log('There was an error querrying the categories', JSON.stringify(err))
    res.send(err)
  });
});

/* Get all items from sensor type */
router.get('/:sensorName', function(req, res){
  let name = parseInt(req.params.sensorName);
  db.sequelize.query(`select sensores.value, sensores.unit, sensores.time from sensores where sensores.sensor ="${name}`)
  .then((all)=>res.send(all))
  .catch((err)=>{
      console.log('*** Error fetching***')
      res.status(400).send(err)
  })
});

/* Post a value */
router.post('/', function(req, res){
  let sensorAdd = {
    'sensor':req.body.sensor,
    'value':req.body.value,
    'unit':req.body.unit,
    'time':req.body.time
  }
  db.sensores.create(sensorAdd)
  .then((latest)=>res.send(latest))
  .catch((err)=>{
    console.log('*** Error Creating latest ***')
    res.status(400).send(err);
  });
});

module.exports = router;