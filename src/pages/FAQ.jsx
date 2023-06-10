import React from 'react'
import '../styles/FAQ.css'
import openbook from '../assets/blog book.png'
import faqblackhome from '../assets/exams-black.png'
import faqtwitter from '../assets/black-twitter.png'


const FAQ=()=>{
    return(
            <div className='faq-home'>
                <section className='faq-first-section'>
                    <nav className='faq-control'>
                        <div className='faq-blue-control'>
                        <p className='firt-para'>FAQ</p>
                        <h1 className='second-para'>What do people usually ask?</h1>
                        <p className='third-para'>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                        </div>
                    </nav>
                </section>
            
                <section className='faq-second-section'>
                        <div className='button-contro'>
                        <button className='faq-button-1'>How to register?  </button>
                        <button className='faq-button-2' >How to register?</button>
                        </div>
                </section>
                    
                    
                <section className='faq-second-section'>
                        <div className='button-contro'>
                        <button className='faq-button-1'>How to register?  </button>
                        <button className='faq-button-2' >How to register?</button>
                        </div>
                </section>

                <section className='faq-second-section'>
                        <div className='button-contro'>
                        <button className='faq-button-1'>How to register?  </button>
                        <button className='faq-button-2' >How to register?</button>
                        </div>
                </section>

                <div className='middle-text'>
                    <nav className='main-text'>
                        <h1>Get Every Latest News Feed</h1>
                        <div className='line-under'></div>
                    </nav>
                </div>
            

                <section className='faq-main-home'>       
                <div className='faq-main-book'>
                <div className='faq-prevs-2'>
                    <img className='faq-middle-img' src={openbook} alt="" />
                    <div className='faq-m-control'>
                    <h1 className='faq-middle-h1'> Examination Preparations <span className='faq-span'> 20 MAR 22</span></h1>
                    <p className='faq-p-revs'>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                    <button className='faq-button-revs'>View This Article &gt; &gt;</button>
                    </div>
                </div>
                </div>

                <div className='faq-main-book'>
                <div className='faq-prevs-2'>
                    <img className='faq-middle-img' src={openbook} alt="" />
                    <div className='faq-m-control'>
                    <h1 className='faq-middle-h1'> Examination Preparations <span className='faq-span'> 20 MAR 22</span></h1>
                    <p className='faq-p-revs'>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                    <button className='faq-button-revs'>View This Article &gt; &gt;</button>
                    </div>
                </div>
                </div>


               
                </section>
                
       
            <section className='faq-last-sec'>
                <div className='faq-last-main'>
                    <div className='faqblack-para-ontr'>
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
                    </div>
                    <div className='faq-2-para'>
                                <img src={faqblackhome} alt="" />
                                <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! With our easy online exam site, you will set up your own engaging exams that fit any kind of difficulty level and be a learning expert.</p>
                                <img className='faq-twit' src= {faqtwitter} alt="" />
                            </div>
                            <div className='faq-last-blue'>
                                <h1> © 2022 All Rights reserved by Exams Africa</h1>
                            </div>
                </div>
                
            </section>
    </div>

    )
}

export default FAQ