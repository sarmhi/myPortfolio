import "./Contact.css";

export default function Contact() {
    return (
        <>
         <div id="contact" className="scroll-el">
            <span>Let's work together</span><br />
            <span>sammiejay813@gmail.com</span>
            <div className="socials">
                <a href="https://github.com/sarmhi" target="_blank"  rel="noreferrer">github</a>
                <a href="https://www.linkedin.com/in/okoronkwo-samuel-22a5931a1/" target="_blank"  rel="noreferrer">linkedIn</a>
            </div>
        </div>
        <footer>
            <span>Nigeria  </span>  &copy; {new Date().getFullYear()}.  All rights reserved
        </footer>
        </>
       
    )
}
