const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('test...')
})

const PORT = process.env.PORT || 3000
app.listen(PORT);
