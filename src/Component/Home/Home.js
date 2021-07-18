import React, { Component } from 'react'
import "../Home/Home.css"
import TopNav from "../TopNav/TopNav"
import FooterBar from "../FooterBar/FooterBar"
import Body from "../Body/Body"

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <TopNav />
                <Body />
                <FooterBar />
            </div>
        )
    }
}
