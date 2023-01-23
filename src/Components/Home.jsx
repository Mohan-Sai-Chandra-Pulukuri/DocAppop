import React from 'react';
import {useState} from 'react'
import Logo from '../Images/Logo.png.png'
import Doc from '../Images/doctor.png'
import Cust from '../Images/medical-checkup.png'
import './Stylings/Home.css'



const Home =(props)=>{

    return(<>
    <div className="maincontainer">
        <div className="navBar">
        <img className='Logo' src={Logo} alt="" />            
        </div>
        <div className="logins">
            <div className="Customer">
                <h3>Customer Login</h3>
                <img src={Cust} alt="" className='custo'/>
                <button className="Login">Login</button>
            </div>
            <div className="Doctor">
                <h3>Doctor Login</h3>
                <img src={Doc} alt="" className='doc' />
                <button className="Login">Login</button>
            </div>
        </div>
    </div>
    
    
    </>)

}
export default Home