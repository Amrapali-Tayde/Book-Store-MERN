import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle  } from 'react-icons/bs';
import { BiUserCircle, BiShow  } from 'react-icons/bi';
import { PiBookOpenTextLight  } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import BookModel from './BookModel';

const SingleBookCard = ({book}) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div key={book._id} className="border-2 border-slate-400 rounded-lg m-4 p-4 relative">
        
    <h2 className="bg-red-300 px-3 py-1 rounded-md text-gray-900 absolute right-2">{book.publishYear}</h2>
      <h4 className="text-gray-600">{ book._id}</h4>

      <div className="my-4 flex justify-start gap-x-2">
        <PiBookOpenTextLight className='text-2xl text-red-400' />
        <span>{ book.title }</span>
      </div>
      <div className="my-4 flex justify-start gap-x-2">
        <BiUserCircle className='text-2xl text-red-400' />
        <span>{ book.author }</span>
      </div>

      <div className="flex justify-between gap-x-2 my-6 px-5">
        <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer' onClick={(e)=> setShowModel(true)} />
      
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-black' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
    {
      showModel && <BookModel book={book} onClose={()=> setShowModel(false)} />
    }

    </div>
  )
}

export default SingleBookCard
