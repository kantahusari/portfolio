/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Image from 'react-bootstrap/Image'
import linkedin from "../Resources/linkedinFinal.png"
import github from "../Resources/githubFinal.png"

import "../FooterBar/FooterBar.css"
export default function FooterBar() {

    const [KfontSize, setKfontSize] = useState(window.innerWidth * (3 / 100))
    const [contFontSize, setcontFontSize] = useState(window.innerWidth * (1.5 / 100))

    const [iconSize, seticonSize] = useState(window.innerWidth * (4 / 100))

    function changeFontSize() {
        seticonSize(window.innerWidth * (4 / 100))
        if (window.innerWidth < 960) {
            setKfontSize(window.innerWidth * (6 / 100))
            setcontFontSize(window.innerWidth * (3 / 100))
        } else {
            setKfontSize(window.innerWidth * (3 / 100))
            setcontFontSize(window.innerWidth * (1.5 / 100))
        }
    }

    useEffect(() => {
        changeFontSize();
    });

    window.addEventListener('resize', changeFontSize)

    function buttom() {
        return (
            <>
                <table className="table">
                    <tbody className="tbody">

                        <tr className="tr">
                            <td className="td">
                                <div className="cellphone">
                                    <a href="tel:+14163194673" className="cell" style={{ fontSize: contFontSize }}>+1 (416) 319 - 4673</a>
                                </div>
                            </td>
                            <td className="td" style={{ fontSize: KfontSize }}>Kanta Husari</td>
                        </tr>

                        <tr className="tr">
                            <td className="td">
                                <div className="cellphone">
                                    <a href="mailto:kanta.husari@gmail.com" className="cell" style={{ fontSize: contFontSize }}>kanta.husari@gmail.com</a>
                                </div>
                            </td>
                            <td className="td">
                                <div className="socialdivlinkedin" style={{ height: iconSize, width: iconSize }}>
                                    <a href="#">
                                        <img src={linkedin} className='socialimagelinkedin' style={{ height: iconSize, width: iconSize }}></img>
                                    </a>
                                </div>
                                <div className="socialdivgithub" style={{ height: iconSize, width: iconSize }}>
                                    <a href="#">
                                        <img src={github} className='socialimagegithub' style={{ height: iconSize, width: iconSize }}></img>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><br /></td>
                            <td><br /></td>
                        </tr>
                        <tr>
                            <td><br /></td>
                            <td><br /></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
    return (
        < footer className="footer" >
            {buttom()}
        </footer >
    )
}


