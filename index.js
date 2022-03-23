import express from 'express';
import { Worker } from 'worker_threads';

const app = express();

app.get('/easy', (req, res) => {
  for (let i = 0; i < 10; i++) {};
  return res.status(200).send({ message: 'I finished counting to 10.' });
})

app.get('/hard', (req, res) => {
  for (let i = 0; i < 10000000000; i++) {};
  return res.status(200).send({ message: 'I finished counting to 10000000000.' });

  // const worker = new Worker('./worker.js');
  // worker.on('message', data => {
  //   return res.status(200).send({ message: data });
  // })
  
})

app.listen(8080, () => console.log('Server running on port 8080'));