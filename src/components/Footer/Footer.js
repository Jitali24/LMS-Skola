import React, { useState } from 'react'
import './Footer.css'

function Footer() {
    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const [click4, setClick4] = useState(false)

    const handleClick1 = () => {
        setClick1(!click1)
    }
    const handleClick2 = () => {
        setClick2(!click2)
    }
    const handleClick3 = () => {
        setClick3(!click3)
    }
    const handleClick4 = () => {
        setClick4(!click4)
    }

    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-col-main'>
                    <a href='/'>
                        <svg
                            width='177'
                            height='73'
                            viewBox='0 0 177 73'
                            fill='#bda588'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M69.56 39.62L66.02 42.14C66.48 43.18 67.14 44.12 68 44.96C68.86 45.78 69.87 46.44 71.03 46.94C72.21 47.42 73.48 47.66 74.84 47.66C75.84 47.66 76.8 47.51 77.72 47.21C78.64 46.93 79.47 46.51 80.21 45.95C80.97 45.39 81.56 44.7 81.98 43.88C82.42 43.06 82.64 42.11 82.64 41.03C82.64 40.15 82.49 39.37 82.19 38.69C81.91 37.99 81.52 37.38 81.02 36.86C80.54 36.34 79.97 35.9 79.31 35.54C78.67 35.16 77.98 34.83 77.24 34.55C76.52 34.31 75.87 34.08 75.29 33.86C74.71 33.62 74.22 33.39 73.82 33.17C73.44 32.93 73.14 32.67 72.92 32.39C72.72 32.09 72.62 31.75 72.62 31.37C72.62 31.05 72.7 30.77 72.86 30.53C73.02 30.29 73.26 30.11 73.58 29.99C73.92 29.85 74.34 29.78 74.84 29.78C75.36 29.78 75.85 29.88 76.31 30.08C76.79 30.26 77.23 30.54 77.63 30.92C78.03 31.3 78.37 31.74 78.65 32.24L82.52 30.08C82.16 29.36 81.64 28.65 80.96 27.95C80.28 27.25 79.43 26.67 78.41 26.21C77.39 25.75 76.17 25.52 74.75 25.52C73.41 25.52 72.18 25.76 71.06 26.24C69.94 26.72 69.05 27.41 68.39 28.31C67.75 29.19 67.43 30.26 67.43 31.52C67.43 32.56 67.62 33.44 68 34.16C68.4 34.86 68.89 35.47 69.47 35.99C70.05 36.49 70.66 36.9 71.3 37.22C71.94 37.54 72.52 37.8 73.04 38C74.06 38.4 74.87 38.75 75.47 39.05C76.09 39.33 76.53 39.64 76.79 39.98C77.07 40.32 77.21 40.75 77.21 41.27C77.21 41.69 77.1 42.06 76.88 42.38C76.68 42.68 76.39 42.92 76.01 43.1C75.63 43.26 75.19 43.34 74.69 43.34C73.99 43.34 73.32 43.19 72.68 42.89C72.06 42.59 71.49 42.16 70.97 41.6C70.45 41.04 69.98 40.38 69.56 39.62ZM86.0293 26V47H91.2793V26H86.0293ZM98.3893 26L89.7793 35.99L98.6593 47H104.809L95.8393 35.84L104.359 26H98.3893ZM109.681 36.5C109.681 35.56 109.821 34.71 110.101 33.95C110.381 33.19 110.781 32.53 111.301 31.97C111.841 31.41 112.471 30.97 113.191 30.65C113.931 30.33 114.751 30.17 115.651 30.17C116.551 30.17 117.361 30.33 118.081 30.65C118.821 30.97 119.451 31.41 119.971 31.97C120.491 32.53 120.881 33.2 121.141 33.98C121.401 34.74 121.531 35.58 121.531 36.5C121.531 37.42 121.391 38.27 121.111 39.05C120.831 39.81 120.431 40.47 119.911 41.03C119.391 41.59 118.771 42.03 118.051 42.35C117.331 42.67 116.531 42.83 115.651 42.83C114.751 42.83 113.931 42.67 113.191 42.35C112.471 42.03 111.841 41.59 111.301 41.03C110.781 40.47 110.381 39.8 110.101 39.02C109.821 38.24 109.681 37.4 109.681 36.5ZM104.341 36.5C104.341 38.12 104.611 39.61 105.151 40.97C105.691 42.33 106.471 43.51 107.491 44.51C108.511 45.51 109.711 46.29 111.091 46.85C112.471 47.39 113.991 47.66 115.651 47.66C117.291 47.66 118.791 47.39 120.151 46.85C121.531 46.29 122.731 45.51 123.751 44.51C124.771 43.51 125.561 42.33 126.121 40.97C126.681 39.61 126.961 38.12 126.961 36.5C126.961 34.88 126.671 33.4 126.091 32.06C125.511 30.7 124.711 29.53 123.691 28.55C122.691 27.57 121.501 26.82 120.121 26.3C118.761 25.78 117.271 25.52 115.651 25.52C114.031 25.52 112.531 25.78 111.151 26.3C109.771 26.82 108.571 27.57 107.551 28.55C106.531 29.53 105.741 30.7 105.181 32.06C104.621 33.4 104.341 34.88 104.341 36.5ZM130.18 26V47H143.68V42.62H135.22V26H130.18ZM150.238 42.95H161.338L160.978 39.08H150.568L150.238 42.95ZM155.758 33.74L158.698 40.49L158.488 41.84L160.978 47H166.768L155.758 24.68L144.688 47H150.418L152.998 41.66L152.788 40.49L155.758 33.74Z'
                                fill='#090761'
                            ></path>
                            <g>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M29.8203 68.629L27.564 72.7421L25.3127 68.6392C26.0445 68.72 26.7763 68.7756 27.503 68.7756C28.2653 68.7756 29.0478 68.72 29.8203 68.629ZM36.1318 57.1437L30.8773 66.7089C30.6893 66.7443 30.4911 66.7746 30.303 66.7999C29.368 66.9363 28.4177 67.0222 27.4979 67.0222C26.5781 67.0222 25.6227 66.9363 24.6877 66.7999C24.5454 66.7797 24.4031 66.7494 24.2557 66.7291L19.0063 57.169C19.2959 57.2044 19.5907 57.2246 19.921 57.2246C22.1773 57.2246 23.3766 56.2948 24.5657 55.3601C25.3737 54.7385 26.1817 54.1069 27.4877 54.1069C28.7938 54.1069 29.5967 54.7385 30.4098 55.3601C31.5989 56.2948 32.7982 57.2246 35.0545 57.2246C35.4458 57.2246 35.7964 57.1993 36.1318 57.1437Z'
                                    fill='#FFC78B'
                                ></path>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M27.5022 22.4604H27.487C21.3685 22.4655 15.8091 24.9566 11.7792 28.9636C7.76463 32.9604 5.26948 38.4732 5.25932 44.5468V44.5822V44.5973C5.2644 50.676 7.76971 56.2089 11.7996 60.2159C14.315 62.7121 17.4301 64.617 20.9061 65.6983L17.7452 59.7965C16.6323 59.0891 15.6007 58.2705 14.6708 57.3459C11.3828 54.0817 9.33998 49.5643 9.3349 44.5973V44.5822V44.5468C9.33998 39.5848 11.3879 35.0776 14.6657 31.8134C17.9485 28.5442 22.4865 26.5129 27.487 26.5129H27.5022H27.5378C32.5179 26.518 37.0458 28.5492 40.3286 31.8134H40.3388C43.6267 35.0776 45.6645 39.5949 45.6695 44.567V44.5822V44.6175C45.6594 49.5745 43.6267 54.0766 40.3388 57.3459C39.4901 58.1897 38.5551 58.9426 37.554 59.6096L34.3423 65.6175C37.7217 64.5261 40.7656 62.6464 43.2252 60.2008C47.2449 56.2039 49.74 50.6861 49.7451 44.6226V44.5872V44.5721C49.74 38.4883 47.2398 32.9604 43.21 28.9535L43.215 28.9484C39.1954 24.9515 33.641 22.4756 27.5378 22.4655'
                                    fill='#FFC78B'
                                ></path>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M37.9608 23.0919C30.9836 19.4992 24.0215 19.7115 17.0341 23.0919C17.0341 19.7266 17.0341 16.5332 17.0341 13.1578C22.0701 7.22063 33.3466 7.49854 37.9608 13.1578C37.9608 15.9622 37.9608 20.2824 37.9608 23.0919ZM44.3384 15.8409V14.3604V7.10947V6.01298C44.3384 5.67444 44.0844 5.38642 43.7439 5.346L38.6418 4.70428L27.5025 0L0 11.6116L15.2097 15.5327V12.9001L15.4181 12.3342C15.9212 11.738 16.5005 11.1821 17.1205 10.6819C20.012 8.35754 23.8945 7.2459 27.716 7.28127C31.5425 7.32169 35.3437 8.51924 38.0574 10.7931C38.6164 11.263 39.1347 11.7885 39.6022 12.3544L39.8004 12.9001V15.5327L42.9918 14.7091V15.8409C42.6818 16.0582 42.4734 16.4119 42.4734 16.8212C42.4734 17.2608 42.7174 17.6398 43.068 17.8469C42.8851 17.9379 42.7072 18.0642 42.5497 18.236L42.138 22.1015C42.5497 22.435 43.0832 22.6371 43.6626 22.6371C44.2419 22.6371 44.7704 22.435 45.1973 22.1015L44.7856 18.236C44.6281 18.0642 44.4502 17.9328 44.2673 17.8469C44.623 17.6398 44.8568 17.2608 44.8568 16.8212C44.8619 16.4119 44.6535 16.0532 44.3384 15.8409ZM55 11.6116L45.6953 7.68045V14.0067L55 11.6116Z'
                                    fill='#FFC78B'
                                ></path>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M18.2993 51.8784V24.5977H24.4432V50.8729C24.0315 51.1104 23.6555 51.3782 23.2794 51.651C22.5477 52.1765 21.8159 52.7071 20.6318 52.7071C19.6155 52.7071 18.9396 52.318 18.2993 51.8784ZM30.5515 52.2321V25.9569H36.6953V53.2377C36.0601 53.6773 35.3791 54.0714 34.3577 54.0714C33.1787 54.0714 32.447 53.5408 31.7152 53.0103C31.3391 52.7425 30.9682 52.4696 30.5515 52.2321Z'
                                    fill='#FFC78B'
                                ></path>
                            </g>
                        </svg>
                    </a>
                    <p>
                        329 Queensberry Street, North Melbourne VIC 3051,
                        Australia.
                    </p>
                    <p className='info-link'>(56) 123 456 789</p>
                    <p className='info-link'>hello@skola.com</p>
                    <div className='footer-icons'>
                        <a href='/'>
                            <i class='fa-brands fa-facebook-f' />
                        </a>
                        <a href='/'>
                            <i class='fa-brands fa-twitter' />
                        </a>
                        <a href='/'>
                            <i class='fa-brands fa-instagram' />
                        </a>
                        <a href='/'>
                            <i class='fa-brands fa-linkedin-in' />
                        </a>
                    </div>
                </div>
                <div className='footer-col'>
                    <div className='footer-col-row'>
                        <h2>Our Company</h2>
                        <div class='footer-menu-btn' onClick={handleClick1}>
                            {click1 ? (
                                <i class='fa-solid fa-minus'></i>
                            ) : (
                                <i class='fa-solid fa-plus'></i>
                            )}
                        </div>
                    </div>
                    <div
                        className='mobile-list'
                        style={{ display: click1 ? 'flex' : 'none' }}
                    >
                        <a href='/'>Our Company</a>
                        <a href='/'>About Us</a>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Community</a>
                        <a href='/'>Student Perks</a>
                        <a href='/'>Blog</a>
                        <a href='/'>Affiliate Program</a>
                        <a href='/'>Careers</a>
                    </div>
                    <div className='list'>
                        <a href='/'>Our Company</a>
                        <a href='/'>About Us</a>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Community</a>
                        <a href='/'>Student Perks</a>
                        <a href='/'>Blog</a>
                        <a href='/'>Affiliate Program</a>
                        <a href='/'>Careers</a>
                    </div>
                </div>
                <div className='footer-col'>
                    <div className='footer-col-row'>
                        <h2>Topics</h2>
                        <div class='footer-menu-btn' onClick={handleClick2}>
                            {click2 ? (
                                <i class='fa-solid fa-minus'></i>
                            ) : (
                                <i class='fa-solid fa-plus'></i>
                            )}
                        </div>
                    </div>
                    <div
                        className='mobile-list'
                        style={{ display: click2 ? 'flex' : 'none' }}
                    >
                        <a href='/'>HTML</a>
                        <a href='/'>CSS</a>
                        <a href='/'>Design</a>
                        <a href='/'>JavaScript</a>
                        <a href='/'>Ruby</a>
                        <a href='/'>PHP</a>
                        <a href='/'>Android</a>
                        <a href='/'>Development Tools</a>
                        <a href='/'>Business</a>
                    </div>
                    <div className='list'>
                        <a href='/'>HTML</a>
                        <a href='/'>CSS</a>
                        <a href='/'>Design</a>
                        <a href='/'>JavaScript</a>
                        <a href='/'>Ruby</a>
                        <a href='/'>PHP</a>
                        <a href='/'>Android</a>
                        <a href='/'>Development Tools</a>
                        <a href='/'>Business</a>
                    </div>
                </div>
                <div className='footer-col'>
                    <div className='footer-col-row'>
                        <h2>Tracks</h2>
                        <div class='footer-menu-btn' onClick={handleClick3}>
                            {click3 ? (
                                <i class='fa-solid fa-minus'></i>
                            ) : (
                                <i class='fa-solid fa-plus'></i>
                            )}
                        </div>
                    </div>
                    <div
                        className='mobile-list'
                        style={{ display: click3 ? 'flex' : 'none' }}
                    >
                        <a href='/'>Web Design</a>
                        <a href='/'>Web Development</a>
                        <a href='/'>Rails Development</a>
                        <a href='/'>PHP Development</a>
                        <a href='/'>Android Development</a>
                        <a href='/'>Starting a Business</a>
                    </div>
                    <div className='list'>
                        <a href='/'>Web Design</a>
                        <a href='/'>Web Development</a>
                        <a href='/'>Rails Development</a>
                        <a href='/'>PHP Development</a>
                        <a href='/'>Android Development</a>
                        <a href='/'>Starting a Business</a>
                    </div>
                </div>
                <div className='footer-col'>
                    <div className='footer-col-row'>
                        <h2>Support</h2>
                        <div class='footer-menu-btn' onClick={handleClick4}>
                            {click4 ? (
                                <i class='fa-solid fa-minus'></i>
                            ) : (
                                <i class='fa-solid fa-plus'></i>
                            )}
                        </div>
                    </div>
                    <div
                        className='mobile-list'
                        style={{ display: click4 ? 'flex' : 'none' }}
                    >
                        <a href='/'>Documentation</a>
                        <a href='/'>Forums</a>
                        <a href='/'>Language Packs</a>
                        <a href='/'>Release Status</a>
                    </div>
                    <div className='list'>
                        <a href='/'>Documentation</a>
                        <a href='/'>Forums</a>
                        <a href='/'>Language Packs</a>
                        <a href='/'>Release Status</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-content2'>
                <div className='copyright'>
                    ©2021 Skola Moodle Theme. All Rights Reserved.
                </div>
                <div className='footer-links'>
                    <a href='/'>Home </a>
                    <a href='/'>Site Map </a>
                    <a href='/'>Privacy Policy </a>
                    <a href='/'>Web Use Policy </a>
                    <a href='/'>Cookie Policy </a>
                </div>
                <div className='footer-lang'>
                    <select>
                        <option>English (en)</option>
                        <option>Francias (fr)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Footer
