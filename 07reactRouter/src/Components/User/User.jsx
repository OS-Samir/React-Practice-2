import React from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-green-600 text-white text-3xl flex p-4 justify-center items-center'>
      User: {userid}
    </div>
  )
}

export default User
