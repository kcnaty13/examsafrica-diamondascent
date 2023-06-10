import React from 'react'
import '../styles/Register.css'
import africa from '../assets/exams 2.png'
import { Link } from 'react-router-dom'
import left from '../assets/layer left.png'
import right from '../assets/layer right.png'

const Register=()=>{
    return(
    <div className='register-home'>
        <div className='login-head-c'>
        <div className="login-head">
        <Link to='/'> < img className='logo' src={africa} alt="logo-pics" /></Link>
        <p className='reg-p-heah'>Already have an account?  <Link className='login-link' to='/Login'>Login </Link></p>
        </div>
      </div>
        <nav className='rigister-main'>
            <div>  
                <div className='reg-first'>
                    <nav className='reg-create-account'>
                    <h1>Create An Account</h1>
                    </nav>
                <nav className='reg-second-main'>
                    <nav>
                        <h1 className='reg-h1'>First Name </h1> <input className='reg-place1' type="text" placeholder='' /> 
                    </nav>
                    <nav>
                        <h1 className='reg-h2'>Last Name </h1> <input className='reg-place2' type="text" placeholder='' />
                    </nav>
                </nav>
                </div >

                    <div className='reg-inputanco'>
                        <nav>
                        <h1 className='reg-h3'>User Name </h1> <input className='reg-place3' type="text" placeholder='' />
                        <h1 className='reg-h4'>Email </h1> <input className='reg-place4' type="email" placeholder='' /> 
                        <h1 className='reg-h5'>Mobile Number </h1> <input className='reg-place5' type="number" placeholder='' />
                        <h1 className='reg-h6'>Passwor </h1> <input className='reg-place6' type="password" placeholder='' /> 
                        <h1 className='reg-h7'>Confirm Pasword </h1> <input className='reg-place7' type="password" placeholder='' />
                        </nav>
                    </div>
            </div>
            <nav className='reg-button-r'>
                <button className='reg-main-botton'>Register Now</button>
            </nav>
        <div className='reg-bala-blu'>
        <nav className='reg-blue'>
            <img src={left} alt="" /> <img src={right} alt="" />
            </nav>
        </div>
            
    </nav>
           
           
        </div>
    )
}

export default Register