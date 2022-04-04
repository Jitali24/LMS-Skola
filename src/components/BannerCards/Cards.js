import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards-container'>
                <Card
                    imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/category/categoryCard-icon-1.svg'
                    title='Why Study at Skola?'
                    body='There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                    aColor='white'
                />
                <Card
                    imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/local_cocoon_essentials/cocoon/61b18c66efbdf.png'
                    title='Learning Toolset'
                    body='There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                    aColor='#2f2d51'
                />
                <Card
                    imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/category/categoryCard-icon-1.svg'
                    title='Great Achievements'
                    body='There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                    aColor='white'
                />
            </div>
        </div>
    )
}

export default Cards
