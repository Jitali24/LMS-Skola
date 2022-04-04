import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import './Demos.css'

function Demos() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className='demos' style={{ right: click ? '0' : '-420px' }}>
            <div class='demos-btn' onClick={handleClick}>
                <div class='demos-btn-icon'>
                    {click ? (
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 24 24'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill='none'
                                stroke='#000'
                                stroke-width='2'
                                d='M3,3 L21,21 M3,21 L21,3'
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            stroke='currentColor'
                            fill='none'
                            stroke-width='0'
                            viewBox='0 0 24 24'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                            ></path>
                        </svg>
                    )}
                </div>
                <div class='demos-btn-text'>Demos</div>
            </div>
            <Scrollbars style={{ width: '100%', height: '100%' }}>
                <div className='demos-container'>
                    <div className='demos-heading'>
                        <h2>Ultimate Design</h2>
                        <h1>Explore 15+ Demos</h1>
                    </div>
                    <div className='demo-card'>
                        <div className='demo-card-row'>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/01_home.jpg'
                                    alt=''
                                />
                                Home v1
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=110&amp;ccn_style=2'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/02_home.jpg'
                                    alt=''
                                />
                                Home v2
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=111&amp;ccn_style=33'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/03_home.jpg'
                                    alt=''
                                />
                                Home v3
                            </a>
                        </div>
                        <div className='demo-card-row'>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=112&amp;ccn_style=4'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/04_home.jpg'
                                    alt=''
                                />
                                Home v4
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=113&amp;ccn_style=5'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/05_home.jpg'
                                    alt=''
                                />
                                Home v5
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=114&amp;ccn_style=6'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/06_home.jpg'
                                    alt=''
                                />
                                Home v6
                            </a>
                        </div>
                        <div className='demo-card-row'>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=115&amp;ccn_style=7'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/07_home.jpg'
                                    alt=''
                                />
                                Home v7
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=116&amp;ccn_style=8'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/08_home.jpg'
                                    alt=''
                                />
                                Home v8
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=117&amp;ccn_style=9'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/09_home.jpg'
                                    alt=''
                                />
                                Home v9
                            </a>
                        </div>
                        <div className='demo-card-row'>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=118&amp;ccn_style=10'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/10_home.jpg'
                                    alt=''
                                />
                                Home v10
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=119&amp;ccn_style=11'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/11_home.jpg'
                                    alt=''
                                />
                                Home v11
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=120&amp;ccn_style=12'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/12_home.jpg'
                                    alt=''
                                />
                                Home v12
                            </a>
                        </div>
                        <div className='demo-card-row'>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=121&amp;ccn_style=13'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/13_home.jpg'
                                    alt=''
                                />
                                Home v13
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=122&amp;ccn_style=14'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/14_home.jpg'
                                    alt=''
                                />
                                Home v14
                            </a>
                            <a
                                href='https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=123&amp;ccn_style=15'
                                class='demo-card-caption'
                            >
                                <img
                                    src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/15_home.jpg'
                                    alt=''
                                />
                                Home v15
                            </a>
                        </div>
                    </div>
                </div>
            </Scrollbars>
        </div>
    )
}

export default Demos
