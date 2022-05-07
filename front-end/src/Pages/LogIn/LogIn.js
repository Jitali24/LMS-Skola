import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/userActions'
import './LogIn.css'

function LogIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const submitHandler = (e) => {
    e.preventDefault()

    if (user.email === '' || user.password === '') {
      alert('Empty fields!')
      return
    }

    dispatch(login(user))
  }

  const userLogin = useSelector((state) => state.userLogin)
  const { error, loading } = userLogin

  useEffect(() => {
    if (userLogin.user) {
      navigate('/')
    }
  }, [userLogin.user, navigate])

  return (
    <div className='login-container'>
      <div className='login-head'>
        <h1>Skola</h1>
        <ol>
          <li>
            <a href='/'>Home /</a>
          </li>
          <li>
            <a href='/login'> &nbsp;Log In to the site</a>
          </li>
        </ol>
      </div>
      <div className='login-body'>
        {error && (
          <div class='loginerrors mt-3'>
            <a href='/' class='accesshide'>
              Invalid Email OR Password!
            </a>
            <div class='alert alert-danger' role='alert'>
              Invalid Email OR Password!
            </div>
          </div>
        )}
        <h2>Log In to Your Skola Account!</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <div class='form-item'>
            <label for='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              class='form-control'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder='Username'
              autocomplete='username'
            />
          </div>
          <div class='form-item'>
            <label for='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              class='form-control'
              placeholder='Password'
              autocomplete='current-password'
            />
          </div>
          <div class='form-forgot'>
            <label class='checkbox-custom' for='rememberusername1'>
              <input
                class='form-control'
                type='checkbox'
                name='rememberusername1'
                id='rememberusername1'
                value='1'
              />
              <div class='f-textbox'>
                <span></span>
                Remember username
              </div>
            </label>
            <p class='f-text'>
              <b>
                <a href='/'>Forgot Password?</a>
              </b>
            </p>
          </div>
          <button type='submit' class='btn' id='loginbtn' disabled={loading}>
            Log in
          </button>
        </form>
        <div class='mt-2'>
          <form action='' id='guestlogin'>
            <input type='hidden' name='logintoken' />
            <input type='hidden' name='username' value='guest' />
            <input type='hidden' name='password' value='guest' />
            <a href='/'>
              <button class='btn style-4 btn-block' type='submit'>
                Log in as a guest
              </button>
            </a>
          </form>
        </div>
        <p class='btn-convert'>
          Is this your first time here?{' '}
          <a href='/signup' className='btn-convert-down'>
            Create new account
          </a>
        </p>
        <p class='btn-convert'>
          Cookies must be enabled in your browser
          <a
            href='/'
            class=''
            role='button'
            data-container='body'
            data-toggle='popover'
            data-placement='right'
          >
            {/* <p>Two cookies are used on this site:</p>
            <p>
              The essential one is the session cookie, usually called
              MoodleSession. You must allow this cookie in your browser to
              provide continuity and to remain logged in when browsing the site.
              When you log out or close the browser, this cookie is destroyed
              (in your browser and on the server).
            </p>
            <p>
              The other cookie is purely for convenience, usually called
              MOODLEID or similar. It just remembers your username in the
              browser. This means that when you return to this site, the
              username field on the login page is already filled in for you. It
              is safe to refuse this cookie - you will just have to retype your
              username each time you log in.
            </p>
            <i
              class="fa ccn-flaticon-info text-info fa-fw"
              title="Help with Cookies must be enabled in your browser"
              aria-label="Help with Cookies must be enabled in your browser"
            ></i> */}
          </a>
        </p>
        <p class='mt-0'>Some courses may allow guest access</p>
      </div>
    </div>
  )
}

export default LogIn
