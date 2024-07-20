import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { motion } from "framer-motion";

function Hero(){

    // const [over,setHover] = React.useState(false);
    // const [over2,setHover2] = React.useState(false);

    return <div><div className="hero">
        <div className="heroleft">
            <motion.div 
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.1}}
            className="imgcont">
                <img src="/file.png" alt="" />
            </motion.div>
        </div>
        <div className="heroright">
            <div className="info">
                <motion.p
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0.1}}
                >Hello I'm</motion.p>
                <motion.h1
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0.2}}
                >Yashasvi Chandra</motion.h1>
                <motion.p 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0.3}}
                >An aspiring full stack developer, programmer, <br/>problem Solver and a learner </motion.p>
            </div>
            <motion.div 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.3}}
            className="herobtn">
                <motion.a 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0.3}}
                href="/resumeSF.pdf" 
                download="yashasviResume.pdf"
                >Download CV</motion.a>
                <motion.a
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0.4}}
                href="/contact"
                >Contact Me</motion.a>
            </motion.div>
            <div className="icons">
                <motion.a
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.4,delay:0.4}}
                href="https://github.com/Yasha5vi"><FaGithub style={{color:"black"}}/></motion.a>
                <motion.a 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.4,delay:0.45}}
                href="https://www.instagram.com/yashasvi_chandra/"><FaInstagram style={{color:"black"}}/></motion.a>
                <motion.a 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.4,delay:0.5}}
                href="https://www.linkedin.com/in/yashasvi-chandra-00ab54245/"><FaLinkedin style={{color:"black"}}/></motion.a>
                <motion.a 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.4,delay:0.55}}
                href="https://twitter.com/yashasvi8532"><BsTwitterX style={{color:"black"}}/></motion.a>
            </div>
        </div>
    </div>
    </div>
}

export default Hero;