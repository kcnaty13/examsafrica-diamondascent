import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "../navbar/Navbar";
import Examsafrica from "./Examsafrica";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Contact from "./ContactUs";

function Special(){
    return(

        <div>
            <Navbar/>
            <Routes>
            <Route path='/' element ={<Examsafrica/>}/>
            <Route path ='/Blog' element= {<Blog/>}/>
            <Route path ='/FAQ' element= {<FAQ/>}/>
            <Route path ='/Contact Us' element= {<Contact/>}/>
            </Routes>
        </div>
    )
}

export default Special