import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import { USER_LOGOUT } from '../../redux/constants/userConstants'

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { user } = userLogin

  useEffect(() => {
    if (!user || user === null || user === {}) {
      navigate('/login')
    }
  }, [user, navigate])

  const logout = (e) => {
    e.preventDefault()

    dispatch({
      type: USER_LOGOUT,
    })
  }

  return (
    user && (
      <div className='profile-container'>
        <div className='instructor-head'>
          <div class='info-avatar'>
            <div class='info-avatar__avatar'>
              <span>{/* <img src='' alt='' /> */}</span>
            </div>
          </div>
        </div>
        <div className='profile-head'>
          <div className='profile-name'>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
        <div className='profile-body'>
          <button type='submit' class='btn' onClick={(e) => logout(e)}>
            Log Out
          </button>
        </div>
      </div>
    )
  )
}

export default Profile
