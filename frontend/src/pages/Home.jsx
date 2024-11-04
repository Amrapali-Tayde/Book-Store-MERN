import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { MdOutlineAddBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BooksTable from '../components/BooksTable';
import BooksCard from '../components/BooksCard';

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [showtype, setShowtype] = useState('table');

  useEffect(() =>{
    setLoading(true);

    axios
      .get(`http://localhost:1003/books`)
      .then((response)=> {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error)=>{
        setLoading(false);
        enqueueSnackbar("Error. Please check console",{ variant: 'error'});
      })

  }, []);

  return (
    <div className='p-4'>
        <div className='flex justify-center gap-x-4'>
            <button
            className='bg-sky-500 text-white px-4 py-2 rounded-lg font-bold'
            onClick={(e) => setShowtype('table')}
            >Table</button>
            
            <button
            className='bg-sky-500 text-white px-4 py-2 rounded-lg font-bold'
            onClick={(e) => setShowtype('card')}
            >Card</button>

            
         </div> 
        <div className='flex justify-between'>
        <h2 className="text-3xl mb-5">Books List</h2>
          <Link to={'/books/create'} title='Add new book'>
           <MdOutlineAddBox className='text-4xl text-sky-800' />
          </Link>       

        </div>
      {
        loading ? <Spinner /> : 
        showtype === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />
      }      

    </div>
  )
}

export default Home
