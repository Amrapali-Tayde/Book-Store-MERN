import express, { json } from 'express';
import { PORT, dbURL } from './config.js';
import mongoose from 'mongoose';
import BooksRoute from './routes/BooksRoute.js';
import cors from 'cors';
  
const app = express();

app.use(json());

app.use(cors());

app.listen(PORT, ()=>{
  console.log(`Book store listening to port ${PORT}`);
});

app.use('/books', BooksRoute);

mongoose.connect(dbURL)
  .then(()=>{
    console.log(`Database connected successfully`);
    app.get('/', (req, res)=>{
      res.status(234).send('Welcome to my Book store branch 3');
    });
  })
  .catch((error) =>{
    console.log({message : error.message});
  });