import React, { useState, useEffect } from 'react'
import "./Services.css"
import TopNav from "../../TopNav/TopNav"
import FooterBar from "../../FooterBar/FooterBar"

export default function Services() {
    const Services = {
        custom: "Custom Programming",
        management: "Database Development and Management",
        full: "Full Stack Web Development",
        desktop: "Custom Desktop Applications",
        mobile: "Android / IOS"
    }
    return (
        <div className="servicescont">
            <TopNav />
            <br />
            <br />
            <div className="servicesss">
                <h1 className="servicetext">{Services.custom}</h1>
            </div>

            <div className="servicesss">
                <h1 className="servicetext">{Services.management}</h1>
            </div>

            <div className="servicesss">
                <h1 className="servicetext">{Services.full}</h1>
            </div>

            <div className="servicesss">
                <h1 className="servicetext">{Services.desktop}</h1>
            </div>

            <div className="servicesss">
                <h1 className="servicetext">{Services.mobile}</h1>
            </div>
            <br />
            <br />
            <FooterBar />
        </div>
    )
}
