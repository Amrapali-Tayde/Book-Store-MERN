import React from 'react';
import SingleBookCard from './SingleBookCard';

const BooksCard = ({ books }) => {
  return (
    <div className='p-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        books.map((book)=>(
          <SingleBookCard key={book._id} book={book} />
        ))
      }
     
      
    </div>
  )
}

export default BooksCard
