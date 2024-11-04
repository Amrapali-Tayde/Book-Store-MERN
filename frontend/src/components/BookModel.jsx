import React from 'react';
import { BiUserCircle  } from 'react-icons/bi';
import { PiBookOpenTextLight  } from 'react-icons/pi';
import { AiOutlineClose  } from 'react-icons/ai';

const BookModel = ({ book, onClose }) => {
  return (
    <div className='fixed flex justify-center items-center bg-black bg-opacity-60 z-50 top-0 right-0 bottom-0 left-0' onClick={onClose} >
      <div
       className='bg-white p-4 m-4 rounded-lg w-[600px] absolute w-[600px] max-w-full'
       onClick={(e)=> e.stopPropagation() }>

      <AiOutlineClose className='text-2xl right-6 absolute text-red-800 cursor-pointer' onClick={onClose} />
      
      <h2 className="bg-red-300 px-2 w-fit rounded-md text-white ">{book.publishYear}</h2>
      <h4 className="text-gray-600 my-2">{ book._id}</h4>

      <div className="my-4 flex justify-start gap-x-2">
        <PiBookOpenTextLight className='text-2xl text-red-400' />
        <span>{ book.title }</span>
      </div>
      <div className="my-4 flex justify-start gap-x-2">
        <BiUserCircle className='text-2xl text-red-400' />
        <span>{ book.author }</span>
      </div>

        
      <div className="my-4">
          <p>My paragraph</p>
          <p className='my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci odio, amet aspernatur, optio unde ipsam ullam vitae obcaecati libero perspiciatis modi aliquam. Placeat voluptates maiores quo aliquid corrupti repellendus vero!</p>
      </div>
      </div>
      
    </div>
  )
}

export default BookModel
