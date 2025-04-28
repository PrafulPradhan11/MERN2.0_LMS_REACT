import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
  const {id} =  useParams()
  const [book,setBook] = useState({})
  const fetchBook = async ()=>{
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    if(response.status === 200){
      setBook(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBook()
  },[])

  return (
    <>
    <Navbar/> 
  <img className="w-full" src= {book.imageUrl ? book.imageUrl : "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg" } alt="Book Image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
    <p className="text-gray-700 text-base">Rs.{book.bookPrice}</p>
    <p className="text-gray-700 text-base">Author Name: {book.authorName} </p>
    <p className="text-gray-700 text-base">Published At: {book.publishedAt}</p>
  </div>
  <button className='bg-blue-300 p-4'> Delete</button>
     </>
  )
}

export default SingleBook