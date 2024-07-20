import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar(){
    return <div>
        <nav className="navbar">
            <motion.div
            initial={{y:-50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.4,delay:0.1}}
            ><p>Yashasvi Chandra</p></motion.div>
            <motion.div 
            initial={{y:-50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.4,delay:0.1}}
            className="item">
            <NavLink className={(e)=>{return e.isActive?"navitem":""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"navitem":""}} to="/about"><li>About</li></NavLink>
            </motion.div>
        </nav>
    </div>
}

export default Navbar;