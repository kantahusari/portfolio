import React, { Component, useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../TopNav/TopNav.css'
import hamburger from "../Resources/PinClipart.com_cempasuchil-clipart_1812493.png"

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'




export default function TopNav() {

    const [clicked, setclicked] = useState(false)
    // const [onScroll, setonScroll] = useState(false)
    const [buttonvisibility, setbuttonvisibility] = useState("hidden")

    const [linkssmall, setlinkssmall] = useState("hidden")
    const [smallrows, setsmallrows] = useState("collapse")

    const handleClick = (event) => {
        event.preventDefault()
        setclicked(!clicked)
        if (clicked) {
            console.log('hide')
            setlinkssmall('hidden')
            setsmallrows('collapse')
        } else {
            console.log('display')
            setlinkssmall('visible')
            setsmallrows('visible')
        }
    }

    const showButton = () => {
        if (window.innerWidth < 960) {
            setbuttonvisibility('visible')
        } else {
            setbuttonvisibility('hidden')
        }

    }

    useEffect(() => {
        showButton();
    });
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', showButton);
    // window.onscroll = showButton()

    function tableNormal() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td className="brand"><h1>Kanta Husari</h1></td>
                        <td className="links"><Link className="navlink" to="/"><h1>Home</h1></Link></td>
                        <td className="links"><Link className="navlink" to="/AboutMe"><h1>About Me</h1></Link></td>
                        <td className="links"><Link className="navlink" to="/Resume"><h1>Resume</h1></Link></td>
                        <td className="links"><Link className="navlink" to="/Services"><h1>Services</h1></Link></td>
                    </tr>
                </tbody>
            </table>
        )
    }

    function tablesmall() {
        return (
            <table >
                <tbody >
                    <tr>
                        <td className="brand"><h1>Kanta Husari</h1></td>
                        <td>
                            <div className="image" style={{ visibility: `${buttonvisibility}` }}>
                                <Image src={hamburger} className='collapseButton' onClick={(event) => { handleClick(event) }} />
                            </div>
                        </td>
                    </tr>
                    <tr className="smallrows" style={{ visibility: `${smallrows}` }}>
                        <td className="linksSmall" style={{ visibility: `${linkssmall}` }}><Link className="navlink" to="/"><h1>Home</h1></Link></td>
                    </tr>
                    <tr className="smallrows" style={{ visibility: `${smallrows}` }}>
                        <td className="linksSmall" style={{ visibility: `${linkssmall}` }}><Link className="navlink" to="/AboutMe"><h1>About Me</h1></Link></td>
                    </tr>
                    <tr className="smallrows" style={{ visibility: `${smallrows}` }}>
                        <td className="linksSmall" style={{ visibility: `${linkssmall}` }}><Link className="navlink" to="/Resume"><h1>Resume</h1></Link></td>
                    </tr>
                    <tr className="smallrows" style={{ visibility: `${smallrows}` }}>
                        <td className="linksSmall" style={{ visibility: `${linkssmall}` }}><Link className="navlink" to="/Services"><h1>Services</h1></Link></td>
                    </tr>

                </tbody>
            </table>
        )
    }

    //rendering here
    if (window.innerWidth < 960) {
        return (
            < div className="top" >
                {tablesmall()}
            </div >
        )
    } else {
        return (
            < div className="top" >
                {tableNormal()}
            </div >
        )
    }
}
