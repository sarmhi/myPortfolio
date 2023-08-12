import "./About.css";
import {NavBar, Contact} from "../../components";


export default function About() {
    return (
        <>
       
        <div className="home">
             <NavBar />
            <h1 className="header"> About me</h1>
            <p className="text">I am a fullstack developer specializing in building applications for the web. I focus on creating user-friendly, easy to use, interactive products for users through seamless visual design, user experience and designing systems with users at heart while leveraging and integrating the latest in backend technologies to achieve the best possible result for the user.</p>
            <p className="text">I hope to one day create digital products for the next billion users.</p>
            <div style={{margin: "8em 0"}}></div>
            <Contact />
        </div>
        </>
        
    )
}