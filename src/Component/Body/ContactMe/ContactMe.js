import React, { useState, useEffect } from 'react'
import "./ContactMe.css"

export default function ContactMe() {

    const [name, setname] = useState("")
    const [emailaddress, setemailaddress] = useState("")
    const [phone, setphone] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")


    const [nameerror, setnameerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [emailerror, setemailerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [phoneerror, setphoneerror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [subjecterror, setsubjecterror] = useState("2px solid rgba(0, 128, 0, 0)")
    const [messageerror, setmessageerror] = useState("2px solid rgba(0, 128, 0, 0)")



    const [errorMessage, seterrorMessage] = useState("")

    function submitForm() {

        //fields empty?
        //yes .. process empty
        if (name === "") {
            seterrorMessage("Please Fill Empty Field(s)")
            setnameerror("2px solid red")
        } else {
            seterrorMessage("")
            setnameerror("2px solid rgba(0, 128, 0, 0)")
        }

        if (emailaddress === "") {
            seterrorMessage("Please Fill Empty Field(s)")
            setemailerror("2px solid red")
        } else {
            seterrorMessage("")
            setemailerror("2px solid rgba(0, 128, 0, 0)")
        }

        if (phone === "") {
            seterrorMessage("Please Fill Empty Field(s)")
            setphoneerror("2px solid red")
        } else {
            seterrorMessage("")
            setphoneerror("2px solid rgba(0, 128, 0, 0)")
        }

        if (subject === "") {
            seterrorMessage("Please Fill Empty Field(s)")
            setsubjecterror("2px solid red")
        } else {
            seterrorMessage("")
            setsubjecterror("2px solid rgba(0, 128, 0, 0)")
        }

        if (message === "") {
            seterrorMessage("Please Fill Empty Field(s)")
            setmessageerror("2px solid red")
        } else {
            seterrorMessage("")
            setmessageerror("2px solid rgba(0, 128, 0, 0)")
        }
        //no .. process post
        if (name !== "" && emailaddress !== "" && phone !== "" && subject !== "" && message !== "") {
            //define the constant of the request 
            const request = {
                name: name,
                email: emailaddress,
                phone: phone,
                subject: subject,
                message: message
            }

            //empty error message
            seterrorMessage("")
            //empty fields
            setname("")
            setemailaddress("")
            setphone("")
            setsubject("")
            setmessage("")
            //send the request to the server
            //receive the request from the server
            //show error messages in case of error
        }

    }

    return (
        <div className="ContactMeCont">
            <div>
                <h1>Get in touch</h1>
            </div>
            <input className="inputField" placeholder="Name" value={name} onChange={(event) => { event.preventDefault(); setname(event.target.value) }} style={{ border: nameerror }}></input><br />
            <input className="inputField" placeholder="Email" value={emailaddress} onChange={(event) => { event.preventDefault(); setemailaddress(event.target.value) }} style={{ border: emailerror }}></input><br />
            <input className="inputField" placeholder="Phone Number" value={phone} onChange={(event) => { event.preventDefault(); setphone(event.target.value) }} style={{ border: phoneerror }}></input><br />
            <input className="inputField" placeholder="Subject" value={subject} onChange={(event) => { event.preventDefault(); setsubject(event.target.value) }} style={{ border: subjecterror }}></input><br />
            <textarea className="textfield" placeholder="Message" value={message} onChange={(event) => { event.preventDefault(); setmessage(event.target.value) }} style={{ border: messageerror }}></textarea ><br />
            <button className="submit" onClick={() => submitForm()}>Send</button><br />
            <div>
                <h1 style={{ color: "red" }}>{errorMessage}</h1>
            </div>
        </div>
    )
}
/*
    const [name, setname] = useState("")
    const [emailaddress, setemailaddress] = useState("")
    const [phone, setphone] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

*/