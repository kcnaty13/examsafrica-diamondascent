import React from 'react'
import navimage from  '../assets/image-big.png'
import '../styles/Examsafrica.css'
import reading from '../assets/image book.png'
import bookk from '../assets/image book2.png' 
import vect1 from '../assets/Vector 1.jpg'
import vect from '../assets/Vector.jpg'
import vect3 from '../assets/Vector 3.png'
import vect4 from '../assets/Vector 4.png'
import owo from '../assets/image owoloke.png'
import focus from '../assets/image meta.png'
import smiling from '../assets/image smile.png'
import hapiness from '../assets/Group 1677.png'
import web from '../assets/wold.svg'
import apple from '../assets/apple.png'
import play from '../assets/play store.png'
import telegram from '../assets/telegram.png'
import whatsapp from '../assets/whatsapp.svg'
import video from '../assets/e video.mp4'
import faqblackhome from '../assets/exams-black.png'
import faqtwitter from '../assets/black-twitter.png'




const Examsafrica=()=>{
    return(
        <div className='exams-home'>
            <section className='section-1' >
                <div>
                    <nav className='practice-holder'>
                        <h1 className='practice'>Practice</h1>
                        <img className='practice-image' src={reading} alt=""/>
                    </nav>
                    <nav className='prepare-holder'>
                        <img className='prepare-image' src={bookk} alt=""/>  <h1 className='prepare'>Prepare</h1>
                       
                    </nav>
                    <div className='excel-container'>
                        <h1 className='excel'>Excel</h1>
                    <nav className='container-holder'>
                        <button className='container-one'> <h1>JAMB-UTME</h1></button>
                        <button className='container-two'><h1>WAEC-SSCE</h1></button>
                        <button className='container-three'><h1>WAEC-GCE</h1></button>
                        <button className='container-four'><h1>COMMON ENTRANCE EXAM</h1></button>
                        <button className='container-five'><h1>NECO</h1></button>
                    </nav>
                    </div>
                    <div className='welcome-toexam'>
                    <h1>Welcome to the Exams.Africa, we will open the world of knowlegde for you! This is the latest online examination system you will ever need to attain success.</h1>
                    </div>
                    <nav className='button-holder'>
                        <button className='get-started'><h1>Get Started</h1></button>
                        <button className='start-practising'><h1>Start Practising</h1></button>
                    </nav>
                </div>
                <div>
                    <img className='big-image' src={navimage} alt=""/>
                </div>
            </section>
                <div></div>

            <section className='e-blue-control'>
            <div className='e-white-control'>
                <div className='e-vector-mainc'>
                    <div className='e-vector-mainc2'>
                    <div className='vect-1-control'>
                        <div><img className='vect1-img' src={vect1} alt="" /></div> 
                        <div>
                        <h1 className='e-vector-h1'>Past questions</h1>
                        <p className='e-vector-p'>Thousands of past questions</p>
                        
                        </div>
                        <div className='e-vector-line'></div>
                    </div>
                    
                    <div className='vect-1-control'>
                        <div><img className='vect1-img' src={vect} alt="" /></div> 
                        <div>
                        <h1 className='e-vector-h1'>Past questions</h1>
                        <p className='e-vector-p'>Mock examination feature</p>
                        
                        </div>
                        <div className='e-vector-line'></div>
                    </div>

                    <div className='vect-1-control'>
                        <div><img className='vect1-img' src={vect3} alt="" /></div> 
                        <div>
                        <h1 className='e-vector-h1'>Past questions</h1>
                        <p className='e-vector-p'>Dashboard to track all activities</p>
                        
                        </div>
                        <div className='e-vector-line'></div>
                    </div>

                    <div className='vect-1-control'>
                        <div><img className='vect1-img' src={vect4} alt="" /></div> 
                        <div>
                        <h1 className='e-vector-h1'>Past questions</h1>
                        <p className='e-vector-p'>Low cost on in-app purchases</p>
                        </div>
                    </div>
                </div> 
                </div>  
            </div>            
            </section>   
                        
            <div className='no-reason'>
                <h1>Now you have no reason to fail</h1>
            </div>

            <section>
                <nav className='catigory-owo'>
                <div>
                    <img src={owo} alt="" />
                </div>
                <div className='owo-para'>
                    <h1>Choose Your Category</h1>
                    <p>Exams Africa gives every user a chance of choosing their exam category based on essential subjects or courses of study e.g WAEC-SSCE, UTME (JAMB), etc.</p>
                    <div className='owo-boder'></div>
                </div>
                </nav>
                

                <nav className='catigory-owo'>
                <div className='owo-para'>
                    <h1>Select Preferable Subject</h1>
                    <p>Every user gets to choose the preferred subject to practise as there are as many essential subjects as you want on the site.</p>
                    <div className='owo-boder'></div>
                </div>
                <div>
                    <img src={focus} alt="" />
                </div>
                </nav>

                <nav className='catigory-owo'>
                <div>
                    <img src={smiling} alt="" />
                </div>
                <div className='owo-para'>
                    <h1>Practise</h1>
                    <p>Now, this is where you get to test your capabilities by practising the questions to the finish line and getting graded at the end.</p>
                    <div className='owo-boder'></div>
                </div>
                </nav>

                <nav className='catigory-owo'>
                
                <div className='owo-para'>
                    <h1>Select Preferable Subject</h1>
                    <p>The aim of this to help you see things more clearly and get a good impression of the possible options, whether you have your heart set on a particular career path or not.</p>
                    <div className='owo-boder'></div>
                </div>
                <div>
                    <img src={hapiness} alt="" />
                </div>
                </nav>
            </section>

           <div className='all-big-blu'>
                <div className='big-blu-h1'>
                    <h1>Available on this Plartform</h1>
                </div>
                <div className='all-social'>
                <div className='e-social-control-main'>
                    <div className='e-social-div'>
                    <img className='wold-img' src={web} alt="" /> <div className='e-d-1'>  <h1 className='e-h1'>Web</h1> <a className='e-a-1' href="#">Download Now</a></div> <div className='e-d-1'></div>
                    </div>
                    <div className='e-last-sideline-1'></div>
                    
                    <div className='e-social-div'>
                    <img className='apple-img' src={apple} alt="" /><div className='e-d-2'><h1 className='e-h2'>App Store</h1> <a className='e-a-2' href="">Download Now</a></div> <div className='e-d-2'></div>
                    </div>
                    <div className='e-last-sideline'></div>
                    
                    <div className='e-social-div'>
                    <img className='play-img' src={play} alt="" /><div className='e-d-3'><h1 className='e-h3'>Play Store</h1><a className='e-a-3' href="#">Download Now</a></div><div className='e-d-3'></div>
                    </div>
                    <div className='e-last-sideline'></div>
                    
                    <div className='e-social-div'>
                    <img className='telegram-img' src={telegram} alt="" /> <div className='e-d-4'><h1 className='e-h4'>Telegram</h1><a className='e-a-4' href="#">Download Now</a></div> <div className='e-d-4'></div>
                    </div>
                    <div className='e-last-sideline'></div>
                    
                    <div className='e-social-div'>
                    <img className='whatsapp-img' src={whatsapp} alt=""/><div className='e-d-5'><h1 className='e-h5'>Whatsapp</h1><a className='e-a-5' href="#">Download Now</a></div>
                    </div>
                </div>
                </div>
           </div>

           <div className='e-most'>
                <h1 className='e-most-h1'>Most Popular Subjects</h1>
                <p className='e-most-p'>All your past questions all in one place. This is your one stop hub for through and precise exams preparations. </p>
           </div>


        <div className='e-box-c1'>
            <div className='e-box-c2'>
                <div className='ebox-1'>
                    <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
            </div>


            <div className='e-box-c2'>
                <div className='ebox-1'>
                    <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
            </div>

            <div className='e-box-c2'>
                <div className='ebox-1'>
                    <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
                <div className='ebox-1'>
                <h1 className='neco-h1'>NECO/FUTHER MATHEMATICS</h1>
                    <p className='neco-p'>Neco-Futher Maths</p>
                    <a className='neco-a' href="">Past Questions </a>  <a className='e-arrow' href="">&gt;&gt;</a>
                </div>
            </div>
            
        </div> 
            
        <div className='e-use'>
            <div className='e-use-main'>
                <h1 className='e-use-h1'>Use The Exam.Africa Platform The Right Way</h1>
                <p className='e-use-p'>Learn the essential ways to successfully maximize the Platform for a exam success.</p>
            </div>
        </div>

        {/* <div className='e-video'>
        <iframe className='i-video' src={video} frameborder="0"></iframe>
        </div> */}
          
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

 
export default Examsafrica