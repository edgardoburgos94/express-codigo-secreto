const express = require('express');
const app = express();

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
// String.prototype.capitalize = function() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// }
// app.get('/makers/:nombre', (req, res) => {
//   res.send('<h1>Hola '+req.params.nombre.capitalize()+'!</h1>');
// });

// Pares e impares
app.get('/', (req, res) => {
  var content = ''
  for (var i=1; i < 51; i++) {
    var parrafo = i%2 === 0 ? i+' Soy Par!' : i+" Soy Impar!"
    content = content + '<p>'+parrafo+'</p>'
  }
  res.send(content)
})

app.listen(3000, () => console.log('Listening on port 3000!'));
