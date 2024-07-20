import React from "react";
import { motion } from "framer-motion";


export default function Footer(){
    return <motion.div 
        // initial={{y:-100,opacity:0}}
        // whileInView={{y:0,opacity:1}}
        // transition={{duration:0.5}}
        className="footer">
        <p>Copyright@{new Date().getFullYear()}</p>
        <p>email : yashasvichandra84@gmail.com</p>
    </motion.div>
}