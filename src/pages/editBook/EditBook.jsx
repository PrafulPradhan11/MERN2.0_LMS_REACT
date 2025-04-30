import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'



const EditBook = () => {
const {id} = useParams()
const navigate = useNavigate()
const [data,setData] = useState({
  bookName : '',
  bookPrice : '',
  isbnNumber : '',
  authorName : '',
  publication : '',
  publishedAt : '',
}) 
const [image,setImage]=useState(null)

const handleChange = (e) => {
  const {name,value} = e.target
  setData({
    ...data,
    [name] : value
  })
}

const handleSubmit = async (e)=>{
  e.preventDefault()
  const formData = new FormData()

  Object.entries(data).forEach(([key,value])=>{
    formData.append(key,value)
  })
  formData.append('image',image)

  const response = await axios.patch("https://mern2-0-basicnode-7zq5.onrender.com/book/" + id,formData)
  if(response.status === 200){
    navigate("/book/" + id)
  } else{
    alert("Something went wrong")
  }
}

const fetchBook = async()=>{
 const response = await axios.get("https://mern2-0-basicnode-7zq5.onrender.com/book/" + id)
 if(response.status === 200){
  setData(response.data.data)
 }
}

useEffect(()=>{
  fetchBook()
},[])

  return (
    <>
    <Navbar />
    <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Edit Book</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="bookName" className="block text-sm font-medium text-gray-600">Book Name</label>
                <input type="text" value={data.bookName} id="bookName" name="bookName" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-600">Book Price</label>
                <input type="number" value={data.bookPrice} id="bookPrice" name="bookPrice" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="isbnNumber" className="block text-sm font-medium text-gray-600">isbnNumber</label>
                <input type="number" value={data.isbnNumber} id="isbnNumber" name="isbnNumber" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="authorName" className="block text-sm font-medium text-gray-600">Author Name</label>
                <input type="text" value={data.authorName} id="authorName" name="authorName" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="publication" className="block text-sm font-medium text-gray-600">Publication</label>
                <input type="text" value={data.publication} id="publication" name="publication" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-600">Published At</label>
                <input type="date" value={data.publishedAt} id="publishedAt" name="publishedAt" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="bookImage" className="block text-sm font-medium text-gray-600">Book Image</label>
                <input type="file" id="bookImage" name="image" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Edit Book</button>
        </form>
    </div>
    </>
  )
}

export default EditBook