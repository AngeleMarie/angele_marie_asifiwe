const express=require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello DevOps!');
});

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
