import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoIosNotificationsOutline, IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdArrowDown } from "react-icons/io";

function Techstack(){

    const iconVariant = (duration)=>(
        {
            initial:{y:-6},
            animate:{
                y:[6,-6],
                transition:{
                    duration:duration,
                    ease:"linear",
                    repeat:Infinity,
                    repeatType:"reverse",
                }
            }
        }
    )

    return <div className="tech">
        <motion.p
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0}}
        >Get to know more<IoMdArrowDown /></motion.p>
        <div className="break"><div></div></div>
        <motion.h1 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
        >Technologies</motion.h1>
        <div className="container">
            <motion.div 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0}}
            className="techleft">
                <motion.div 
                variants={iconVariant(2)}
                // initial="initial"
                animate="animate"
                className="techitem"><FaHtml5 className="ricon"/>
                    <p >HTML</p>
                </motion.div>
                <motion.div 
                variants={iconVariant(2.25)}
                // initial="initial"
                animate="animate"
                className="techitem"><FaCss3Alt className="ricon" />
                    <p>CSS</p>
                </motion.div>
                <motion.div 
                variants={iconVariant(2.5)}
                // initial="initial"
                animate="animate"
                className="techitem"><IoLogoJavascript className="ricon" />
                    <p>Javascript</p>
                </motion.div>
            </motion.div>
            <motion.div 
             initial={{x:100,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{duration:0.5,delay:0}}
            className="techright">
                <motion.div 
                variants={iconVariant(2.75)}
                // initial="initial"
                animate="animate"
                className="techitem"><FaNodeJs className="ricon" />
                    <p>Nodejs</p>
                </motion.div>
                <motion.div 
                variants={iconVariant(3)}
                // initial="initial"
                animate="animate"
                className="techitem"><FaReact className="ricon" />
                    <p>React</p>
                </motion.div>
                <motion.div 
                variants={iconVariant(3.25)}
                // initial="initial"
                animate="animate"
                // whileInView={{opacity:1,x:0}}
                // initial={{opacity:0,x:100}}
                // transition={{duration:0.5}} 
                className="techitem"><SiPostgresql className="ricon" />
                    <p>Postgre</p>
                </motion.div>
            </motion.div>
        </div>
    </div>
}

export default Techstack;