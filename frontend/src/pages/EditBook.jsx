import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [loading, setLoading] = useState(false);
  const [title , setTitle] = useState('');
  const [author , setAuthor] = useState('');
  const [publishYear , setPublishYear] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { id } = useParams();


  useEffect(()=>{
    setLoading(true);

    axios
    .get(`http://localhost:1003/books/${id}`)
    .then((response)=>{
      setLoading(false);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
    })
    .catch((error)=>{
      setLoading(false);
      enqueueSnackbar(`${error}` , { variant: 'error'});
    })

  }, []);

  const handleEditBook = ()=>{
    setLoading(true);

    const data={
      title,
      author,
      publishYear
    }

    axios
    .put(`http://localhost:1003/books/${id}`, data)
    .then((response)=>{
      setLoading(false);
      enqueueSnackbar(`${response.data.message}` ,{variant: 'success'});
      //console.log(response);
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      enqueueSnackbar(`${error}` , { variant: 'error'});
    })
  }

  return (
    <div className='p-4'>

      <BackButton />
      <h2 className="text-2xl my-4">Edit Book</h2>
      
      <div className="flex flex-col border-2 border-sky-500 p-5 m-4 rounded-lg w-[600px] w-max-full">
        <div className="my-2 flex flex-col">
          <label htmlFor="" className='text-gray-400 text-xl'>Title</label>
          <input type="text"
          className='border border-slate-800 p-2'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-2 flex flex-col">
          <label htmlFor="" className='text-gray-400 text-xl'>Author</label>
          <input type="text"
          className='border border-slate-800 p-1'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="my-2 flex flex-col">
          <label htmlFor="" className='text-gray-400 text-xl'>Publish Year</label>
          <input type="text"
          className='border border-slate-800 p-1'
          value={publishYear}
          onChange={(e)=> setPublishYear(e.target.value)}
          />
        </div>

        <div className="my-3 flex flex-col">
          <button 
          className='bg-sky-600 p-2 my-4 text-white rounded-md'
          onClick={handleEditBook}
          >Update</button>
        </div>
      </div>
    </div>
  )
}

export default EditBook
