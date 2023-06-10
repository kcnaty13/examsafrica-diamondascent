import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import  logo from '../assets/exams 2.png'
import{ FaBars} from 'react-icons/fa'

import {TiTimes} from 'react-icons/ti'

const Navbar=()=>{
    const [mobile, setMobile] = useState(false)
    const handleMobile = ()=>{
      setMobile(!mobile)
    }
    
return(
    <div className='all-div'>
        <div className='main-nav'>
        <Link to='/'><img className='image-navbar' src={logo} alt="" /></Link>
        <div className={mobile ? 'new-nav' : 'nav-link'}>
            <div className='link-div'>
                <Link  to='/Blog'> Blog </Link>
                <Link  to='/FAQ'>FAQ  </Link>
                <Link  to='/Contact Us'> Contact Us </Link>
            </div>

            <div className='button-div'>
                    <button className='register-button'><Link to='/Register'>Register</Link></button>
                    <button className='login-button'><Link  to='/Login'>Login</Link></button>
            </div>
        </div>
        
            <div className='icon'>
                {mobile? <TiTimes className='time' onClick={handleMobile}/>
                : <FaBars className='bar' onClick={handleMobile}/>
                }
            </div> 
        </div>
    </div>
)
}
export default Navbar