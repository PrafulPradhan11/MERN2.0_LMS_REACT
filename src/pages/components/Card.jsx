import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({book}) => {
  const navigate = useNavigate()
  return (
     <>
         <div className="max-w-sm rounded overflow-hidden shadow-lg my-10" key={book._id}>
  <img className="w-full" src={book.imageUrl ? book.imageUrl : "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg" } alt="Book Image"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
    <p className="text-gray-700 text-base">
    Rs. {book.bookPrice}
    </p>
    <p className="text-black-700 text-base">
     {book.isbnNumber}
    </p>
    <p className="text-gray-700 text-base">
     {book?.haha}
    </p>
    <Link to={`/book/${book._id}`}>SeeMore</Link>
     {/* <button type="button"  onClick={()=>navigate('/book')}> See More</button> */}
  </div>
</div>
     </>
  )
}

export default Card