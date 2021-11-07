import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import FirebaseContext from '../context/firebase'

export default function Login() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isInvalid = password === '' || email === ''

  useEffect(function titleChange(){
    document.title = 'Login - TechBook'
  }, [])

  const handleLogin = () => {
    
  }
  
  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'>
        <img src='/images/iphone-with-profile.jpg' alt='iphone' />
      </div>
    </div>
  )
}
