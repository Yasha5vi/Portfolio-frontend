import React from "react";
import axios from "axios";

export default function Contact(){

    const [etext,setEtext] = React.useState("");
    const [mtext,setMtext] = React.useState("");
    const [msg,setMsg] = React.useState("");

    function handleChangeEmail(e){
        const value = e.target.value;
        setEtext(value);
    }

    function handleChangeMsg(e){
        const value = e.target.value;
        setMtext(value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log("in");
        try{
            const result = await axios.post("https://portfolio-backend-nrxi.onrender.com/contact/yashasvi",{email:etext,msg:mtext});
            // console.log(result);
            setMsg(result.data);
        }catch(err){
            console.log(err.message);
        }
    }

    return <div>
            <div className="formdiv">
                <h1>Contact Me</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChangeEmail} value={etext}/>
                    <label htmlFor="email">Message</label>
                    <textarea type="text" id="email" onChange={handleChangeMsg} rows="15" value={mtext}/>
                    <p style={{marginTop:"5%", textAlign:"center"}}>{msg}</p>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="break">
                <div></div>
            </div>
    </div>
}