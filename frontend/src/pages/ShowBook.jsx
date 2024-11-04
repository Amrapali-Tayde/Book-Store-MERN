import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const ShowBook = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);

  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();


  useEffect(()=>{
    setLoading(true);
    axios
    .get(`http://localhost:1003/books/${id}`)
    .then((response)=>{
      setBook(response.data);
      setLoading(false);
    })
    .catch((error)=>{
      setLoading(false);
      enqueueSnackbar('Error! please check console', { variant: 'error'});
      console.log(error);
    })
  }, [])

  return (
    <div className='p-4'>
        <BackButton />
        <h2 className="text-2xl my-4">Book Deatils</h2>

        {
          loading ? <Spinner /> : '' 
        }

        <div className=" border-2 border-sky-600 w-[600px] p-4 m-4 rounded-xl">
            <div className="my-4">
              <span className='text-gray-500 text-xl'>Id: </span>
              <span className='ml-2'>{ book._id}</span>
            </div>
            <div className="my-4">
              <span className='text-gray-500 text-xl'>Title: </span>
              <span className='ml-2'>{ book.title}</span>
            </div>
            <div className="my-4">
              <span className='text-gray-500 text-xl'>Author: </span>
              <span className='ml-2'>{ book.author}</span>
            </div>
            <div className="my-4">
              <span className='text-gray-500 text-xl'>Publish Year: </span>
              <span className='ml-2'>{ book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className='text-gray-500 text-xl'>Create Datetime: </span>
              <span className='ml-2'>{ new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className='text-gray-500 text-xl'>Update Datetime: </span>
              <span className='ml-2'>{ new Date(book.createdAt).toString() }</span>
            </div>
        </div>
    </div>
  )
}

export default ShowBook
