import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import {Container, Postcard} from '../components/index'
import appwriteService from '../appwrite/config'
import { set } from 'mongoose'
const AllPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
      <Container>
        {/* {posts.map((post) => (
            <Postcard key = {post.$id} post={post} />
        ))} */}

        <div className='flex flex-wrap'>{posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <Postcard post={post} />
                </div>
        ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
