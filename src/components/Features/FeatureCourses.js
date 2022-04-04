import React from 'react'
import FeatureCard from './FeatureCard'
import './FeatureCourses.css'

function FeatureCourses() {
    return (
        <div className='carousels'>
            <div className='carousels-container'>
                <div className='carousels-title'>
                    <div className='carousel-title'>
                        <h2>Featured Courses</h2>
                        <p>Discover your perfect program in our courses.</p>
                    </div>
                    <div className='right'>
                        <select>
                            <option value='all categories'>
                                All categories
                            </option>
                            <option value='design'>Design</option>
                            <option value='business'>Business</option>
                        </select>
                    </div>
                </div>
                <div
                    class='carousel'
                    data-flickity='{ "wrapAround": true, "autoPlay": true, "cellAlign": "left" }'
                >
                    <div className='carousel-cell'>
                        <FeatureCard
                            imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/153/course/overviewfiles/img-4.jpg'
                            categories='Design'
                            categoriesTitle='Introduction to Web Design &amp; HTML'
                            avatarImg='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/860/user/icon/skola/f3?rev=9253'
                        />
                    </div>
                    <div className='carousel-cell'>
                        <FeatureCard
                            imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/152/course/overviewfiles/img-5.jpg'
                            categories='Design'
                            categoriesTitle='Introduction to Web Design &amp; HTML'
                        />
                    </div>
                    <div className='carousel-cell'>
                        <FeatureCard
                            imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/156/course/overviewfiles/img-1.jpg'
                            categories='Design'
                            categoriesTitle='Introduction to Web Design &amp; HTML'
                        />
                    </div>
                    <div className='carousel-cell'>
                        <FeatureCard
                            imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/146/course/overviewfiles/img-7.jpg'
                            categories='Design'
                            categoriesTitle='Introduction to Web Design &amp; HTML'
                        />
                    </div>
                    <div className='carousel-cell'>
                        <FeatureCard
                            imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/154/course/overviewfiles/img-3.jpg'
                            categories='Design'
                            categoriesTitle='Introduction to Web Design &amp; HTML'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureCourses
