import React from 'react'
import StudentCarousel from './StudentCarousel'
import './Students.css'

function demo() {
    return (
        <div className='students-container'>
            <div className='students-title'>
                <h2>What our students have to say</h2>
                <p>Discover your perfect program in our courses.</p>
            </div>
            <div
                class='carousel'
                data-flickity='{ "wrapAround": true, "autoPlay": true  }'
            >
                <div className='carousel-cell'>
                    <StudentCarousel
                        imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/local_cocoon_essentials/cocoon/img-17.jpg61b6637e89ea5.jpeg'
                        name='Daniel Parker'
                        designation='Frontend Developer'
                    />
                </div>
                <div className='carousel-cell'>
                    <StudentCarousel
                        imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/local_cocoon_essentials/cocoon/img-161b79f06e3cfd.jpeg'
                        name='Alison Dawn'
                        designation='WordPress Developer'
                    />
                </div>
                <div className='carousel-cell'>
                    <StudentCarousel
                        imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/avatar.jpg'
                        name='Albert Cole'
                        designation='Designer'
                    />
                </div>
                <div className='carousel-cell'>
                    <StudentCarousel
                        imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/local_cocoon_essentials/cocoon/img-17.jpg61b6637e89ea5.jpeg'
                        name='Daniel Parker'
                        designation='Frontend Developer'
                    />
                </div>
                <div className='carousel-cell'>
                    <StudentCarousel
                        imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/local_cocoon_essentials/cocoon/img-161b79f06e3cfd.jpeg'
                        name='Alison Dawn'
                        designation='WordPress Developer'
                    />
                </div>
            </div>
        </div>
    )
}

export default demo
