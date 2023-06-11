import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import africa from '../assets/exams 2.png'
import left from '../assets/layer left.png'
import right from '../assets/layer right.png'


const Login=()=>{
    return(
        <div className='login-main'>
            <div className='login-nav-control'>
                <div className='login-deecont'>
                <Link to='/'> < img className='last-logo' src={africa} alt="logo-pics" /></Link>
                <p className='log-p-heah'>Already have an account?  <Link className='log-link' to='/Register'>Register </Link></p>
                </div>
            
             <nav className='log-create-account'>
                    <h1>login To Account</h1>
                    </nav>
            
                <div className='log-inputanco'>
                <div>   
                    <nav className='log-main'>
                        <h1 className='log-reg-h3'>User Name/Mobile Number </h1> <input className='log-place3' type="text" placeholder='' /> 
                        <h1 className='log-reg-h4'>Passwor </h1> <input className='log-place4' type="password" placeholder='' /> 
                    </nav>
                    <nav className='login-button-r'>
                    <button className='login-m-botton'>Register Now</button>
                    </nav>
                        <div className='log-l-r'>
                        <img className='left' src={left} alt="" /> <img className='right' src={right} alt="" />
                        </div>
                </div>
                </div>
            </div>       
        </div>
    )
}

export default Login