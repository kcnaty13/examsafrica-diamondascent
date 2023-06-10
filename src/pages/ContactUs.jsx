import React from 'react'
import '../styles/ContactUs.css'
import facebook from '../assets/facebook (1) 1.png'
import instergram from '../assets/instagram (1) 1.png'
import linkedin from '../assets/linkedin (1) 1.png'
import direction from '../assets/Icon Artwork.png'
import blackhome from '../assets/exams-black.png'
import blacktwit from '../assets/black-twitter.png'

const Contact=()=>{
    return(
        <div className='contact-home'>
            <section className='contact-control'>
                <div className='contact-blue-box'>
                    <nav className='contact-para'>
                        <p className='contact-first-para'>Support</p>
                        <h1 className='contact-second-para'>How can we help you?</h1>
                        <p className='contact-third-para'>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                    </nav>
                </div>
            </section>


            <section className='contact-sec-2'>
                <div className='contact-control-two'>
                        <div className='contact-andco'>
                            <h1 className='c-h1'>Contact Us</h1>
                            <p className='c-p1'>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                            <div className='contact-h-office'>
                            <div className='contact-head-office'>
                                <h1 className='c-head-o'>Head Office</h1>
                                <p className='p-head-a'>17/18 Folabi Baker street Agungi, Lekki, Lagos Nigeria.</p>
                                
                                <div className='contact-direction'>  
                                <img className='direction' src={direction} alt="direction" /> <h3 className='c-g-dd'>Get directions</h3> 
                                </div>

                                <div className='contact-pp'>
                                    <p>+234 4863 33773</p>
                                    <p>Examsafricainfo.com</p>
                                </div>
                                <div className='f-i-l'>
                                    <img className='c-facebook' src={facebook} alt="" /> <img className='c-instagram' src={instergram} alt="" /> <img src={linkedin} alt="" />
                                </div>
                            </div>
                        </div>
                        </div>

                        <div>

                            
                        <div className='c-input-anco'>
                                <nav>
                                <h1 className='c-nameh1-imp'>Name</h1> <input className='c-im-1'  type="text" Name ='name' placeholder='Kazeez Lazeem' />
                                </nav>
                                <div>
                                <h1 className='c-emailh1-imp'>Email Address</h1> <input className='c-im-2' type="text" Name ='email' placeholder='kcnaty13@gmail.com' />
                                </div>
                            </div>
                            <h1 className='c-subjecth1'>Subject</h1> <input className='c-im-3' type="text" Name ='text' placeholder="Can't find a subject"/>
                            <h1 className='c-helph1'>How ca we help you?</h1> <input className='c-im-4' type="text" Name ='text' placeholder="I need to register for Englih i can't find the course"/> 
                            <nav className='c-button-c'>
                            <button className='c-button-main'>send message &gt;&gt;</button>
                            </nav>
                        </div>
                </div>
            </section>

            <section className='c-black'>
                <div className='c-main-black'>
                    <div className='c-para-contrl'>
                    <h1 className='c-blak-h1'>Need specific help?</h1>
                    <p className='c-black-p'>Visit our frequently asked questions section here  or make use our social media platforms to get in contact with us. on any of the social media icons to be redirected.</p>
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

export default Contact