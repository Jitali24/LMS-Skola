import React from 'react'
import './Card.css'

export default function Card({ title, body, aColor, imgSrc }) {
    return (
        <div className='card'>
            <div className='card-container'>
                <div className='card-content'>
                    <div className='img-container'>
                        <img src={imgSrc} alt='' />
                    </div>
                    <div className='card-title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='card-body'>
                        <p>{body}</p>
                    </div>
                    <div className='btn'>
                        <button>
                            <b>
                                <a
                                    href='/'
                                    style={{
                                        color: aColor,
                                    }}
                                >
                                    Read More
                                </a>
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
