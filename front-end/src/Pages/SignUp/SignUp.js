import React from 'react'
import './SignUp.css'

function SignUp() {
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
        <h2>Sign Up to Your Skola Account!</h2>
        <form action=''>
          <div class='form-item'>
            <label for='username'>Name</label>
            <input
              type='text'
              name='Name'
              id='Name'
              class='form-control'
              value=''
              placeholder='Name'
              autocomplete='Name'
            />
          </div>
          <div class='form-item'>
            <label for='username'>Email</label>
            <input
              type='email'
              class='form-control'
              value=''
              placeholder='Email'
              autocomplete='email'
            />
          </div>
          <div class='form-item'>
            <label for='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value=''
              class='form-control'
              placeholder='Password'
              autocomplete='current-password'
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
