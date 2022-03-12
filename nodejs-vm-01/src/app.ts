import express from 'express';
const app = express();
const port = 3000;

app.set('json spaces', 0);

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.json({ a: "foo", b: 1});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

