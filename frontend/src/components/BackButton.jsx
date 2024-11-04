import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/'}) => {
  return (
    <div className='flex'>
      <Link to={destination} className='bg-sky-600 rounded-lg px-3 py-1 ml-5'>
        <BsArrowLeft className='text-2xl text-white' />
      </Link>
    </div>
  )
}

export default BackButton
