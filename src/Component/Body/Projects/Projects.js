/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import "./Projects.css"

import leftArrow from "../../Resources/left-arrow.png"
import rightArrow from "../../Resources/right-arrow.png"
import BabTuma from "../../Resources/BabTuma.png"
import Ashyad from "../../Resources/AshyadLogo.png"

export default function Projects() {
    const Projects = [
        {

            ProjectName: "Bab Tuma Restaurant",
            ProjectPic: BabTuma,
            ProjectDesc: "Full Stack Project",
            ProjectDesc01: "JavaScript HTML and CSS",
            ProjectDesc02: "TableAgent, Ritual Integration",
            ProjectDesc03: "",
            ProjectLink: "https://www.babtuma.ca/"
        },
        {
            ProjectName: "Ashyad Real Estate Investments",
            ProjectPic: Ashyad,
            ProjectDesc: "Full Stack Project",
            ProjectDesc01: "JavaScript HTML and CSS",
            ProjectDesc02: "",
            ProjectDesc03: "",
            ProjectLink: "https://ashyad-co.com/"
        },
        {
            ProjectName: "Bab Tuma",
            ProjectPic: BabTuma,
            ProjectDesc: "Full Stack Project",
            ProjectDesc01: "JavaScript, HTML, and CSS",
            ProjectDesc02: "",
            ProjectDesc03: "",
            ProjectLink: "This is Link Three"
        },

    ]

    const [CurrentPosition, setCurrentPosition] = useState(0)
    const [ProjectName, setProjectName] = useState(Projects[0].ProjectName)
    const [ProjectPic, setProjectPic] = useState(Projects[0].ProjectPic)
    const [ProjectDesc, setProjectDesc] = useState(Projects[0].ProjectDesc)
    const [ProjectDesc01, setProjectDesc01] = useState(Projects[0].ProjectDesc01)
    const [ProjectDesc02, setProjectDesc02] = useState(Projects[0].ProjectDesc02)
    const [ProjectDesc03, setProjectDesc03] = useState(Projects[0].ProjectDesc03)
    const [ProjectLink, setProjectLink] = useState(Projects[0].ProjectLink)

    function moveRgiht() {
        const newpos = CurrentPosition + 1
        if (newpos > Projects.length - 1) {
            setProjectName(Projects[0].ProjectName)
            setProjectPic(Projects[0].ProjectPic)
            setProjectDesc(Projects[0].ProjectDesc)
            setProjectDesc01(Projects[0].ProjectDesc01)
            setProjectDesc02(Projects[0].ProjectDesc02)
            setProjectDesc03(Projects[0].ProjectDesc03)
            setProjectLink(Projects[0].ProjectLink)
            setCurrentPosition(0)
        } else {
            setProjectName(Projects[newpos].ProjectName)
            setProjectPic(Projects[newpos].ProjectPic)
            setProjectDesc(Projects[newpos].ProjectDesc)
            setProjectDesc01(Projects[newpos].ProjectDesc01)
            setProjectDesc02(Projects[newpos].ProjectDesc02)
            setProjectDesc03(Projects[newpos].ProjectDesc03)
            setProjectLink(Projects[newpos].ProjectLink)
            setCurrentPosition(newpos)
        }
    }

    function moveLeft() {
        const newpos = CurrentPosition - 1
        if (newpos < 0) {
            setProjectName(Projects[Projects.length - 1].ProjectName)
            setProjectPic(Projects[Projects.length - 1].ProjectPic)
            setProjectDesc(Projects[Projects.length - 1].ProjectDesc)
            setProjectDesc01(Projects[Projects.length - 1].ProjectDesc01)
            setProjectDesc02(Projects[Projects.length - 1].ProjectDesc02)
            setProjectDesc03(Projects[Projects.length - 1].ProjectDesc03)
            setProjectLink(Projects[Projects.length - 1].ProjectLink)
            setCurrentPosition(Projects.length - 1)
        } else {
            setProjectName(Projects[newpos].ProjectName)
            setProjectPic(Projects[newpos].ProjectPic)
            setProjectDesc(Projects[newpos].ProjectDesc)
            setProjectDesc01(Projects[newpos].ProjectDesc01)
            setProjectDesc02(Projects[newpos].ProjectDesc02)
            setProjectDesc03(Projects[newpos].ProjectDesc03)
            setProjectLink(Projects[newpos].ProjectLink)
            setCurrentPosition(newpos)
        }
    }
    const [width, setwidth] = useState(window.innerWidth * (7 / 100))
    const [projectImageSize, setprojectImageSize] = useState(window.innerWidth * (30 / 100))

    function changeDimention() {
        setwidth(window.innerWidth * (7 / 100))
        setprojectImageSize(window.innerWidth * (30 / 100))
    }
    useEffect(() => {
        changeDimention();
    });
    window.addEventListener('resize', changeDimention)
    return (
        <div className="Pgalery">

            <div>
                <h1>Projects</h1>
            </div>

            <table className="ProjectShowArea">
                <tbody className="ProjectTB">
                    <tr className="ProjectTR">

                        <td className="leftarr">
                            <div style={{ width: width, height: width }} className="tbdivleft">
                                <img className="leftarrimage" src={leftArrow} style={{ width: width, height: width }} onClick={() => moveLeft()}></img>
                            </div>
                        </td>

                        <td className="midshow">

                            <div className="tbdivmid">
                                {/* <div className="projectPic">{ProjectPic}</div> */}
                                <div className="projectPicDiv" style={{ width: projectImageSize, height: projectImageSize }}><img className="projectPicImg" src={ProjectPic} style={{ width: projectImageSize, height: projectImageSize }}></img></div>
                                <p className="projectDesc">{ProjectName}</p><br />
                                <p className="projectDesc">{ProjectDesc}</p><br />
                                <p className="projectDesc">{ProjectDesc01}</p><br />
                                <p className="projectDesc">{ProjectDesc02}</p><br />
                                <p className="projectDesc">{ProjectDesc03}</p><br />

                                <div className="projectLink"><a className="projectlink01" style={{ textDecoration: "none" }} target="_balnk" href={ProjectLink}>{ProjectLink}</a></div>
                            </div>
                        </td>

                        <td className="rightarr">
                            <div style={{ width: width, height: width }} className="tbdivright">
                                <img className="rightarrimage" src={rightArrow} style={{ width: width, height: width }} onClick={() => moveRgiht()}></img>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
