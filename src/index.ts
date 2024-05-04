import express from 'express';

const PORT = 3080;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT ? PORT : 8081,
  () => console.log(`Listening to port ${PORT}`)
);