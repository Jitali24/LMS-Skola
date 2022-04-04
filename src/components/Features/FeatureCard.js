import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({ imgSrc, categories, categoriesTitle }) => (
    <div className='feature-container'>
        <div className='feature-inner'>
            <div className='feature-img'>
                <img src={imgSrc} alt='' />
                <span class='feature-label'>BEST SELLER</span>
                <div class='feature-tool'>
                    <a href='/'>
                        <i class='fa-regular fa-eye' />
                    </a>
                    <a href='/'>
                        <i class='fas fa-heart'></i>
                    </a>
                </div>
            </div>
            <div className='feature-body'>
                <div class='feature-avatar'>
                    <a href='/'>
                        <img
                            src='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/271/user/icon/skola/f3?rev=9206'
                            alt=''
                        />
                    </a>
                </div>
                <div className='feature-title'>
                    <p>{categories}</p>
                    <h2>{categoriesTitle}</h2>
                </div>
                <div className='feature-grow'></div>
                <div class='feature-rating '>
                    <div class='f-star'>
                        <span>
                            <i class='fas fa-star'></i>{' '}
                            <i class='fas fa-star'></i>{' '}
                            <i class='fas fa-star'></i>{' '}
                            <i class='fas fa-star'></i>{' '}
                            <i class='fas fa-star-half-alt'></i>
                        </span>{' '}
                        4.5 (3+ reviews)
                    </div>
                </div>
                <div class='feature-footer '>
                    <ul class='feature-info'>
                        <li>
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z'
                                    fill='currentColor'
                                ></path>
                            </svg>
                            1 lessons
                        </li>
                    </ul>
                    <div class='feature-price'>
                        <ins>$89.99</ins>
                        <del>$399.99</del>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default FeatureCard
