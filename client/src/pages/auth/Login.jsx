import React from 'react'
import LoginForm from '../../components/auth/LoginForm'
import Navbar from '../../components/Navbar'

function Login() {
  return (
    <div>
      <Navbar />
      <div>Login</div>
      <LoginForm />
    </div>
  )
}

export default Login