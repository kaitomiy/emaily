const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const POST = process.env.POST || 5000;
app.listen(POST);
