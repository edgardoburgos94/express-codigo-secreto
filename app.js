const express = require('express');
const app = express();

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
//
// app.get('/', (req, res) => {
//   res.send('<h1>HcUy6Re2LLBRtj</h1>');
// });

// Saludame 1
// app.get('/', (req, res) => {
//   console.log(typeof req.query.nombre)
//   if (typeof req.query.nombre === 'undefined' || req.query.nombre == '') {
//     res.send('<h1>Hola desconocido!</h1>')
//   } else {
//     res.send('<h1>Hola '+req.query.nombre+'!</h1>')
//   }
// })

// Saludame 2
app.get('/makers/:nombre', (req, res) => {
  res.send('<h1>Hola '+req.params.nombre.capitalize()+'!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
