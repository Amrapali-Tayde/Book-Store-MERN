import express from 'express';
import { Book } from "../model/BookModel.js";

const router = express.Router();

router.get('/', async (req, res)=> {
  try{

    const books = await Book.find({});

    if(books.length < 1){
      res.status(404).send({ message: 'No data found'});
    }
    else{
      return res.status(200).send({ count: books.length,
        data : books
      });
    }   

  } catch(error){
    res.status(500).send({ message: error.message});
    console.log(error);
  }
});

router.post('/', async (req, res)=> {
  try{

    const newbook = {
      title : req.body.title,
      author : req.body.author,
      publishYear : req.body.publishYear
    }
    const book = await Book.create(newbook);

    if(!book){
      res.status(404).send({ message: 'Error'});
    }
    else{
      return res.status(200).json({ message : 'Book created successfully', data: book});
    }   

  } catch(error){
    res.status(500).send({ message: error.message});
    console.log(error);
  }
});


router.get('/:id', async (req, res)=> {
  try{

    const { id } = req.params;

    const book = await Book.findById(id);

    if(!book){
      res.status(404).send({ message: 'Book not found'});
    }
    else{
      return res.status(200).send( book );
    }   

  } catch(error){
    res.status(500).send({ message: error.message});
    console.log(error);
  }
});

router.put('/:id', async (req, res)=> {
  try{

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if(!result){
      res.status(404).send({ message: 'Book not found'});
    }
    else{
      return res.status(200).send( {message : 'Updated successfully'} );
    }   

  } catch(error){
    res.status(500).send({ message: error.message});
    console.log(error);
  }
});

router.delete('/:id', async (req, res)=> {
  try{

    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if(!result){
      res.status(404).send({ message: 'Book not found'});
    }
    else{
      return res.status(200).send( {message : 'Book deleted successfully'} );
    }   

  } catch(error){
    res.status(500).send({ message: error.message});
    console.log(error);
  }
});


export default router;