import {useState} from "react"


export default function Footer(){
const [letter, setLetter] = useState("")

function handleSubmit(e){
    e.preventDefault();
    alert("Newsletter Sent !")
}


    return (
        <div className="footer-container">
            <div className="footer-left">
                <h2>POLICY/TERMS</h2>
                <h2>FAQ</h2>
                <h2>RECRUIT</h2>
            </div>
            <div className="footer-right">
                <h2>NEWS LETTER</h2>
                <input
                    value={letter}
                    placeholder="Enter e-mail to keep in touch"
                    onChange={((e) => {setLetter(e.target.value)})}
                />
                <button 
                    onClick={handleSubmit}
                    className="newsletter-btn">
                    SUBSCRIBE
                </button>
                <h3>
© 2026 Dunked Inc.  All Rights Reserved</h3>
                
            </div>
        </div>
    )
}