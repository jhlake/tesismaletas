var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Tesis Maletas' });
});
router.get('/all', function(req, res, next) {
  res.render('todaInformacion.html', { title: 'Tesis Maletas' });
});
router.get('/alertas', function(req, res, next) {
  res.render('alertas.html', { title: 'Tesis Maletas' });
});
router.get('/ubicaciones', function(req, res, next) {
  res.render('ubicaciones.html', { title: 'Tesis Maletas' });
});
router.get('/configurar', function(req, res, next) {
  res.render('configuracionVuelo.html', { title: 'Tesis Maletas' });
});

module.exports = router;
