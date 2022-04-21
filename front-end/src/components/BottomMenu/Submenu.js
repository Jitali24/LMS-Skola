import React from 'react'
import './Submenu.css'

function Submenu() {
    return (
        <div className='submenu-container'>
            <a href='/'>
                <div>
                    <img
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADaCAMAAABzRUvHAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMA+wWK1iYRmqMz7toMHSzl6XlvvVFEshc9Y/NcxNNWkMq5ramFRshM4N51ITPUlAAAClFJREFUeNrsmW9v2kAMxs+XACH/2iQjIQhCJ6Yhdt//+20FbRZ5HNxbQETdrL1Yi+/uV9v32CRmvOVtsY8O1dkOUVC0q2VjLmbNs8yavesbxWEddLl9Ipo1gaNr+02X1OXSvrs8nsyKWK5nTJdExzksewBTmmtYbBe0ODpaILsvVF7EB2MVLCRLgpzB7g61qsm5SMGS0aheMdhdobq39yN8sThmbx2D3RWKyAMLyABsPNXqDKVGSwdbMddoqNnhsqmOpYMdZgw2jqqgdxw3CovBqGCuEVDLN4YajXXe6m0JYN5UAUONxWKwYBSXNTMO1RgsDNhsDFdHfOQYLASjbnwC/bGI6DGJtCatHG6uY7GWiGTsU6fG+lNlCR/ng0VuPz8Wh0QjIxdmxvpSLWM+zRMrOP8+L+tYJGPHeGmsH9UKit0Hy15cmrYmBpMKf2WsFxUUux/Wn0E2K0MEY1eHXDqVXKkfxPpD1lUABlxjY+WqpTE6Vm98rJxTufRq57oCdT6yo47FYEfuFlBfWPdywxm4g+Ti0hg/LAYrYzmT5GJoRKKKJjKVc4eGhVnFArAmcgMbnz6iq9XA4rjrQSlYCNYNSeHWqLZ3JCawasBVwULPphqo+72WwtaR0li9sbD54/6tsbeocnI0MIbYEdFi6wYOyG+WV+hI7V3+WNhrsW3ffiZESqf3xsLJ5CQesh9Ox0qmmt8KcCphpeYG11xMybDap+CPVKiTQ4ONxoXqpWcDqWQmuyzquL/otfqxPn+oc2EasRhFEW3YGaCWwckNWBisGQwF7EXSCbhYIO9wcRHKtltpLubffW+tGVqdb4TDtpJnJzi642Am2hMwAVnYDubxKKWmE5ppKGCV7NdrbydgEsmSzgxsUQjH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'
                        alt=''
                    />
                </div>
            </a>
            <a href='/'>
                <div className='submenu-content'>
                    <div className='submenu-icon'>
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
                                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                            ></path>
                        </svg>
                    </div>
                    <div className='submenu-content1'>
                        <p>EXPLORE FEATURES</p>
                        <span>Top-class functionality</span>
                    </div>
                </div>
            </a>
            <a href='/'>
                <div className='submenu-content'>
                    <div className='submenu-icon'>
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
                                d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                            ></path>
                        </svg>
                    </div>
                    <div className='submenu-content1'>
                        <p>LIVE CHAT</p>
                        <span>Questions?</span>
                    </div>
                </div>
            </a>
            <a href='/'>
                <div className='submenu-content'>
                    {/* <i class='fa-regular fa-cart-shopping' /> */}
                    <div className='submenu-icon'>
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
                                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                            ></path>
                        </svg>
                    </div>
                    <div className='submenu-content1'>
                        <p>BUY NOW FOR $59</p>
                        <span>Super price limited time</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Submenu
