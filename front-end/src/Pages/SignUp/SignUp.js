import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/actions/userActions'
import './SignUp.css'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(registerUser(newUser))
  }

  const userLogin = useSelector((state) => state.userLogin)
  const userRegister = useSelector((state) => state.userRegister)
  const { error } = userRegister

  useEffect(() => {
    if (userLogin.user) {
      navigate('/')
    }
  }, [userLogin.user, navigate])

  return (
    <div className='signup-container'>
      <div className='login-head'>
        <h1>Skola</h1>
        <ol>
          <li>
            <a href='/'>Home /</a>
          </li>
          <li>
            <a href='/signup'> &nbsp;Sign Up to the site</a>
          </li>
        </ol>
      </div>
      <div className='login-body'>
        {error && (
          <div class='loginerrors mt-3'>
            <div class='alert alert-danger' role='alert'>
              Failed to create an account!
            </div>
          </div>
        )}
        <h2>Sign Up to Your Skola Account!</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <div class='form-item'>
            <label for='username'>Name</label>
            <input
              type='text'
              name='Name'
              id='Name'
              class='form-control'
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder='Name'
              autocomplete='Name'
            />
          </div>
          <div class='form-item'>
            <label for='username'>Email</label>
            <input
              type='email'
              class='form-control'
              placeholder='Email'
              autocomplete='email'
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </div>
          <div class='form-item'>
            <label for='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              class='form-control'
              placeholder='Password'
              autocomplete='current-password'
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </div>
          <a href='/'>
            <button type='submit' class='btn' id='loginbtn'>
              Sign Up
            </button>
          </a>
        </form>
        <p class='btn-convert'>
          Already have an account? <a href='/login'>Log In</a>
        </p>
      </div>
    </div>
  )
}

export default SignUp
