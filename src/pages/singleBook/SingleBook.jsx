import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
  const {id} =  useParams()
  const navigate = useNavigate()

  const [book,setBook] = useState({})
  const fetchBook = async ()=>{
    const response = await axios.get(`https://mern2-0-basicnode-7zq5.onrender.com/book/${id}`)
    if(response.status === 200){
      setBook(response.data.data)
    }
  }
  useEffect(()=>{
    fetchBook()
  },[])

  const deleteBook = async()=>{
    const response = await axios.delete(`https://mern2-0-basicnode-7zq5.onrender.com/book/${id}`)
    if (response.status === 200 ){
      navigate('/')
    } else {
      console.log("Something went wrong !!")
    }
  }

  return (
    <>
    <Navbar/> 
  <img className="w-[200px] h-[200px] mt-24" src= {book.imageUrl ? book.imageUrl : "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg" } alt="Book Image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book.bookName}</div>
    <p className="text-gray-700 text-base">Rs.{book.bookPrice}</p>
    <p className="text-gray-700 text-base">Author Name: {book.authorName} </p>
    <p className="text-gray-700 text-base">Published At: {book.publishedAt}</p>
  </div>
  <button onClick={deleteBook} className='bg-blue-300 p-4'> Delete</button>
  <Link to={`/editBook/${book._id}`}>
  <button className='bg-green-300 p-4 m-2'> Edit</button>
  </Link>
  
     </>
  )
}

export default SingleBook