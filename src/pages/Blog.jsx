import React from 'react'
import '../styles/Blog.css'
import blogbook from '../assets/blog book.png'
import blackhome from '../assets/exams-black.png'
import blacktwit from '../assets/black-twitter.png'




const Blog=()=>{
    return(
        <div  className='blog-home'>
            <section className='blog-control'>
                <div className='blog-blue-box'>
                    <nav className='blog-para'>
                        <p className='blog-firt-para'>Blog</p>
                        <h1 className='blog-second-para'>Get the latest Updates</h1>
                        <p className='blog-third-para'>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                    </nav>
                </div>
            </section>

            <section className='blog-book-cover'>
            <div className='blog-main-c'>
                <div className='blog-b-anco'>
                <img className='blog-main-img' src={blogbook} alt="" />
                <h1 className='exam-para'>Examination Preparations</h1>
                <p className='revision-para'>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                <button className='article-button'>View this Article {'>'}{'>'} </button>
                </div>
                <div >
                <img className='blog-main-img' src={blogbook} alt="" />
                <h1 className='exam-para'>Examination Preparations</h1>
                <p className='revision-para'>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                <button className='article-button'>View this Article {'>'}{'>'} </button>
                </div>
            </div>

            
            <div className='blog-main-c'>
                <div className='blog-b-anco'>
                <img className='blog-main-img' src={blogbook} alt="" />
                <h1 className='exam-para'>Examination Preparations</h1>
                <p className='revision-para'>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                <button className='article-button'>View this Article {'>'}{'>'} </button>
                </div>
                <div >
                <img className='blog-main-img' src={blogbook} alt="" />
                <h1 className='exam-para'>Examination Preparations</h1>
                <p className='revision-para'>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                <button className='article-button'>View this Article {'>'}{'>'} </button>
                </div>
            </div>
                  
           
            <div className='blog-main-c'>
                <div className='blog-b-anco'>
                <img className='blog-main-img' src={blogbook} alt="" />
                <h1 className='exam-para'>Examination Preparations</h1>
                <p className='revision-para'>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                <button className='article-button'>View this Article {'>'}{'>'} </button>
                </div>
                <div >
                <img className='blog-main-img' src={blogbook} alt="" />
                <h1 className='exam-para'>Examination Preparations</h1>
                <p className='revision-para'>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                <button className='article-button'>View this Article {'>'}{'>'} </button>
                </div>
            </div>
            
              
            </section>

            

            
            <section className='black-home'>
                <div className='main-black'>
                    <nav className='black-para-control'>
                            <div>
                                <h1>Main</h1>
                                <p>Home</p>
                            </div>

                            <nav>
                                <h1>Need Help</h1>
                                <p>Contact us</p>
                                <p>FAQ</p>
                            </nav>

                            <div>
                                <h1>Features</h1>
                                <p>Categories</p>
                                <p>Past Questions</p>
                                <p>Subjects</p>
                            </div>

                            <nav>
                                <h1>Informative</h1>
                                <p>Blog</p>
                            </nav>
                    </nav>

                    <div className='black-2-para'>
                        <img src={blackhome} alt="" />
                        <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! With our easy online exam site, you will set up your own engaging exams that fit any kind of difficulty level and be a learning expert.</p>
                        <img className='black-twit' src= {blacktwit} alt="" />
                    </div>
                    <div className='last-blue'>
                        <h1> © 2022 All Rights reserved by Exams Africa</h1>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog