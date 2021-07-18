/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import "./Resume.css"
import TopNav from "../../TopNav/TopNav"
import FooterBar from "../../FooterBar/FooterBar"
import Experience from "../../Resources/experience.png"
import Education from "../../Resources/education.png"
import Calendar from "../../Resources/calendar.png"
import Achievement from "../../Resources/achievement.png"

export default function Resume() {

    const [imagesSize, setimagesSize] = useState(window.innerWidth * (5 / 100))
    const [fontSize, setfontSize] = useState(window.innerWidth * (3 / 100))
    const [iconsize, seticonsize] = useState(window.innerWidth * (2 / 100))

    const [experiencefontsize, setexperiencefontsize] = useState(window.innerWidth * (2 / 100))
    const [fromtofontsize, setfromtofontsize] = useState(window.innerWidth * (1 / 100))

    const [topexperiencemargin, settopexperiencemargin] = useState(window.innerWidth * (8 / 100))
    const [otherexperiencemargintop, setotherexperiencemargintop] = useState(window.innerWidth * (5 / 100))

    function changeImageSize() {
        setimagesSize(window.innerWidth * (5 / 100))
        setfontSize(window.innerWidth * (3 / 100))

        if (window.innerWidth < 960) {
            setexperiencefontsize(window.innerWidth * (4 / 100))
            seticonsize(window.innerWidth * (4 / 100))
            setfromtofontsize(window.innerWidth * (3 / 100))

            settopexperiencemargin(window.innerWidth * (10 / 100))
            setotherexperiencemargintop(window.innerWidth * (5 / 100))

        } else {

            setfromtofontsize(window.innerWidth * (1.5 / 100))
            setexperiencefontsize(window.innerWidth * (2 / 100))
            seticonsize(window.innerWidth * (2 / 100))

            settopexperiencemargin(window.innerWidth * (8 / 100))
            setotherexperiencemargintop(window.innerWidth * (5 / 100))
        }
    }

    useEffect(() => {
        changeImageSize();
    });
    window.addEventListener('resize', changeImageSize)


    return (
        <div className="resumecont">
            <TopNav />
            <div className="resumeall">

                <div className="otherinfo">

                    <div className="experience">
                        <div className="eximagediv" style={{ width: imagesSize, height: imagesSize }}><img className="eximage" src={Experience} style={{ width: imagesSize, height: imagesSize }}></img></div>
                        <div className="extitle" style={{ fontSize: fontSize }}>Work Experience</div>

                        <div className="experiencecontent" style={{ marginTop: topexperiencemargin }}>

                            <dt style={{ fontSize: experiencefontsize }}>Full Stack Developer</dt>
                            <dt style={{ fontSize: experiencefontsize }}>Freelancer</dt>
                            <br />
                            <dt style={{ width: iconsize, height: iconsize }} className="date"><img src={Calendar} style={{ width: iconsize, height: iconsize }}></img></dt>
                            <dt className="fromto" style={{ fontSize: fromtofontsize }}>May 2019 - Current</dt>
                            <br />
                            <br />
                            <p style={{ fontSize: fromtofontsize }}>_ Developing Full Stack web applications</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Defining the structure and requirements of the project.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Applying front-end technologies such as React, Angular, CSS, Bootstrap etc.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Building back-end structure using Node.JS, PHP, APIs etc.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Implementing a variety of database technologies including both SQL and NoSQL.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Interacting with clients to make sure that their views are translated in a proper way.</p>

                        </div>

                        <div className="experiencecontent" style={{ marginTop: otherexperiencemargintop }}>
                            <dt style={{ fontSize: experiencefontsize }}>Research & Innovation, Students Projects</dt>
                            <dt style={{ fontSize: experiencefontsize }}>George Brown College</dt>
                            <br />
                            <dt style={{ width: iconsize, height: iconsize }} className="date"><img src={Calendar} style={{ width: iconsize, height: iconsize }}></img></dt>
                            <dt className="fromto" style={{ fontSize: fromtofontsize }}>June 2019 - August 2019</dt>
                            <br />
                            <br />
                            <p style={{ fontSize: fromtofontsize }}>_ Coordinated four projects of 15K budget each.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Updated project's SQL database.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Tracked spending and progress of the projects.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Participated in developing a project proposal estimation rubric.</p>

                        </div>

                        <div className="experiencecontent" style={{ marginTop: otherexperiencemargintop }}>
                            <dt style={{ fontSize: experiencefontsize }}>Administration and Stores Clerk</dt>
                            <dt style={{ fontSize: experiencefontsize }}>Kobay Enstel Limited, ON</dt>
                            <br />
                            <dt style={{ width: iconsize, height: iconsize }} className="date"><img src={Calendar} style={{ width: iconsize, height: iconsize }}></img></dt>
                            <dt className="fromto" style={{ fontSize: fromtofontsize }}>February 2017 – August 2018</dt>
                            <br />
                            <br />
                            <p style={{ fontSize: fromtofontsize }}>_ Reported to plant manager and performed assistance for controlling and HR.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Constantly produced excel spreadsheets to track production performance using skills such as pivot tables and macros.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Fetched data from data storage using SQL.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Generated daily plant reports for maintenance and production using ERP system, SQL, and MS Excel.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Performed monthly inventory checking for maintenance department and summarized results on spreadsheets.</p>
                            <p style={{ fontSize: fromtofontsize }}>_ Reviewed weekly production cost report for controlling.</p>
                        </div>


                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="education">

                        <div className="eximagediv" style={{ width: imagesSize, height: imagesSize }}><img className="eximage" src={Education} style={{ width: imagesSize, height: imagesSize }}></img></div>
                        <div className="extitle" style={{ fontSize: fontSize }}>Education</div>

                        <div className="experiencecontent" style={{ marginTop: topexperiencemargin }}>
                            <dt style={{ fontSize: experiencefontsize }}>Advanced Diploma - Computer Programming and Analysis</dt>
                            <dt style={{ fontSize: experiencefontsize }}>George Brown College, Ontario</dt>
                            <br />
                            <dt style={{ width: iconsize, height: iconsize }} className="date"><img src={Calendar} style={{ width: iconsize, height: iconsize }}></img></dt>
                            <dt className="fromto" style={{ fontSize: fromtofontsize }}>September 2018 - April 2021</dt>
                        </div>

                        <div className="experiencecontent" style={{ marginTop: otherexperiencemargintop }}>
                            <dt style={{ fontSize: experiencefontsize }}>B.Sc.Business Administration</dt>
                            <dt style={{ fontSize: experiencefontsize }}>Tishreen University, Syria</dt>
                            <br />
                            <dt style={{ width: iconsize, height: iconsize }} className="date"><img src={Calendar} style={{ width: iconsize, height: iconsize }}></img></dt>
                            <dt className="fromto" style={{ fontSize: fromtofontsize }}>2011</dt>
                        </div>

                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="achievement">

                        <div className="eximagediv" style={{ width: imagesSize, height: imagesSize }}><img className="eximage" src={Achievement} style={{ width: imagesSize, height: imagesSize }}></img></div>
                        <div className="extitle" style={{ fontSize: fontSize }}>Achievements</div>

                        <div className="experiencecontent" style={{ marginTop: topexperiencemargin }}>
                            <dt style={{ fontSize: experiencefontsize }}>Award of Research & Innovation Student Appreciation</dt>
                            <dt style={{ fontSize: experiencefontsize }}>George Brown College, Ontario</dt>
                            <br />
                            <dt style={{ width: iconsize, height: iconsize }} className="date"><img src={Calendar} style={{ width: iconsize, height: iconsize }}></img></dt>
                            <dt className="fromto" style={{ fontSize: fromtofontsize }}>2019</dt>

                        </div>

                        <div className="experiencecontent" style={{ marginTop: otherexperiencemargintop }}>
                            <dt style={{ fontSize: experiencefontsize }}>Dean's List of honor</dt>
                            <dt style={{ fontSize: experiencefontsize }}>George Brown College, Ontario</dt>
                            <br />
                            <dt style={{ width: iconsize, height: iconsize }} className="date"><img src={Calendar} style={{ width: iconsize, height: iconsize }}></img></dt>
                            <dt className="fromto" style={{ fontSize: fromtofontsize }}>2020 - 2021</dt>
                        </div>

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="DownloadResume"><a className="DownloadResumeLink" href={Achievement} download>Download Resume</a></div>
                    <br />
                    <br />
                    <br />
                </div>

            </div>
            <FooterBar />
        </div>
    )
}
