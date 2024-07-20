import React from "react";
import { motion } from "framer-motion";

function About(){
    return <div style={{padding:"0 5% 0 5%"}}>
        <div className="aboutme">
            <motion.h1
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.5}}
            >About Me</motion.h1>
            <motion.p
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5}}
            > 
                I am a pre final year Computer Science student deeply passionate about coding and innovative problem-solving. 
                I am eager to explore opportunities to apply my skills in real-world projects. My enthusiasm drives me to make a meaningful impact in the tech industry.
                A quick learner, I thrive on challenges and am dedicated to contributing effectively to any team or project.</motion.p>
            <motion.h1
             initial={{y:100,opacity:0}}
             whileInView={{y:0,opacity:1}}
             transition={{duration:0.5}}
            >Technical Skills</motion.h1>
            <motion.ul 
            className="abtlist">
                <motion.li
                 initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5}}                                
                ><b>Languages :</b> C++, C, Java, Python, Javascript</motion.li>
                <motion.li
                 initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5}}                
                ><b>Frontend :</b> HTML, CSS, React, Bootstrap</motion.li>
                <motion.li
                 initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5}}
                ><b>Backend :</b>Express ,Node.js, EJS, Flask</motion.li>
                <motion.li
                 initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5}}
                ><b>Database :</b> PostgreSQL</motion.li>
                <motion.li
                 initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5}}
                ><b>Developer Tools :</b> GitHub, Postman, VS Code, Canva</motion.li>
            </motion.ul>
            <motion.h1 
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.5}}
            >Coding Profiles</motion.h1>
            <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5}}
                className="abtprofile">
                <a className="abtbton" href="">LeetCode</a>
                <a className="abtbton" href="">Codeforces</a>
            </motion.div>
            <motion.h1
             initial={{y:100,opacity:0}}
             whileInView={{y:0,opacity:1}}
             transition={{duration:0.5}}
            >Achievements</motion.h1>
            <motion.div className="achi"
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5}}
            >
                <motion.li >Secured <b>Rank 5</b>/300 in Code Cubicle 1.0 Hackathon</motion.li>
                {/* <motion.li >Selected for the JP morgan <b>Code For Good</b> Hackathon</motion.li> */}
            </motion.div>
        </div>
        <div className="break" style={{marginTop:"60px"}}>
            <div style={{width:"100%"}}>

            </div>
        </div>
    </div>
}

export default About;