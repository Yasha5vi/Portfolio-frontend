import React from "react";
import { LuBrain } from "react-icons/lu";
import { delay, motion } from "framer-motion";
import data from "../assets/data";

function Project(){

    return <div className="project">
        <div className="pmain">
            <motion.h1 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5}}
            >Projects</motion.h1>
        </div>
        {data.map((item,index)=>{
            return <div className="phead" key={index}>
                <div className="pleft">
                    <motion.div className="pimgcont"
                    initial={{x:-100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5}}
                    >
                        <p>{item.date}</p>
                    </motion.div>
                </div>
                <div className="pright">
                    <div className="pcontent">
                        <motion.h1
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:0.1}}
                        >{item.title}</motion.h1>
                        <motion.p
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:0.2}}
                        >{item.content}</motion.p>
                    </div>
                    <motion.div className="pbton"
                    initial={{x:100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.3}}
                    >
                        <a href={item.github}>GitHub</a>
                        <a href={item.demo}>Demo Video</a>
                    </motion.div>
                </div>
            </div>
        })}
        <div className="break">
            <div>
            
            </div>
        </div>
    </div>
}

export default Project;