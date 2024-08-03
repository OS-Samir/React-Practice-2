import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, setLoading} = useForm()
  const {error, setError} = useState("")

  const login = async (data) => {
    setError("")
  }
  return (
    <div>
     
    </div>
  )
}

export default Login
