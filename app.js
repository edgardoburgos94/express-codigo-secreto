const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res.send('<h1>HcUy6Re2LLBRtj</h1>');
// });

app.get('/', (req, res) => {
  res.send('<h1>Hola desconocido!</h1>')
})

app.get('/:nombre', (req, res) => {
  console.log(req)
  if (req.params ==='undefined') {
    res.send('<h1>Hola deconocido!</h1>');
  } else {
    res.send('<h1>Hola '+req.params.nombre+'!</h1>');
  }
});

app.listen(3000, () => console.log('Listening on port 3000!'));
