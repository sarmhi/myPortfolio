import "./NavBar.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
import signature from "../../assets/signature.png";

export default function NavBar() {
    return (
        <>
            <>
                {['md'].map((expand) => (
                    <Navbar key={expand} bg="#000000" expand={expand} className="mb-0">
                        <>
                            <img src={signature} alt="signature" />
                            {/* <Navbar.Brand href="/"><img src={logo} alt="logo" className="logo" /></Navbar.Brand> */}
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton >
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <img src={signature} alt="signature" />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="navlinks">
                                        <a href="/" >Home<ArrowRight /></a>
                                        <a href="about" >About<ArrowRight /></a>
                                        <a href="projects" >Projects<ArrowRight /></a>
                                        <a href="#contact" >Contact<ArrowRight /></a>
                                        
                                    </div>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </>
                    </Navbar>
                ))}
            </>
        </>

    )
}