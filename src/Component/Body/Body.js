import React, { Component, useState, useEffect } from 'react'
import "../Body/Body.css"



import Skills from "../Body/Skills/Skills"
import Projects from "../Body/Projects/Projects"
import ContactMe from "../Body/ContactMe/ContactMe"


export default function Body() {
    //full screen 1920
    //font size = 2% of screen size
    return (
        <>
            <Skills />
            <Projects />
            <ContactMe />
        </>
    )
}


