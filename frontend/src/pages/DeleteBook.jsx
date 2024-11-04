import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  
  const handleDeleteBook = ()=>{
    setLoading(true);

    axios
      .delete(`http://localhost:1003/books/${id}`)
      .then((response)=>{
        setLoading(false);
        enqueueSnackbar(response.data.message, { variant: 'success' });
        navigate('/');
      })
      .catch((error)=>{
        setLoading(false);
        enqueueSnackbar(`Error. Please check console`, { variant : 'error'});
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
        <BackButton />
      <h2 className="text-2xl mt-5">Delete Book</h2>
      {
        loading ? <Spinner /> : ''
      }
      <div className="flex flex-col justify-center items-center border-2 border-sky-600 w-[600px] h-[400px] my-5 m-auto">
        <h2 className="text-xl">Are you sure want to delete this book?</h2>
          <button className='bg-red-500 px-4 py-2 text-xl text-white rounded-lg my-4'
          onClick={handleDeleteBook}
          >Yes, Delete it.</button>
        </div>
    </div>
  )
}

export default DeleteBook
