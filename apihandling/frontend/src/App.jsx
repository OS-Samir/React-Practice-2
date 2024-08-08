
import './App.css'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false);
  useEffect (() => {
      ;(async () => {
       try {
         const response = await axios.get('api/products')
         console.log(response.data);
         setProducts(response.data)
       } catch (error) {
          setError(true)
       }
      })()

  },[]);
  return (
    <div>
      <h1>API handling</h1>
      <h2>Number of products are: {products.length}</h2>
    </div>
  )
}

export default App
