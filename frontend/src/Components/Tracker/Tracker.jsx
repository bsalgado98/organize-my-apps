import React, { useState } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import './Tracker.css'
import Typewriter from 'typewriter-effect'

import Sheet from './Sheet'

const Tracker = () => {
    const db = firebase.firestore()
    const [currentUser, setCurrentUser] = useState(undefined)
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            setCurrentUser(user)
        }
        else {
            console.log('no one signed in')
        }
    })
    const submitEntry = (e) => {
        e.preventDefault()
        const companyName = document.getElementById('company-name')
        const appliedOn = document.getElementById('applied-on')
        const status = document.getElementById('status')
        const notes = document.getElementById('notes')
        const entry = {
            [companyName.value]: {
                companyName: companyName.value,
                appliedon: appliedOn.value,
                status: status.value,
                notes: notes.value
            }
        }
        db.collection('users').doc(currentUser.email).update(entry)
        .then()
        .catch((error) => {
            db.collection('users').doc(currentUser.email).set(entry)
        })
        companyName.value = ''
        appliedOn.value = ''
        notes.value = ''
    }
    return currentUser ? (
        <div>
            <h1 id="greeting">
                <Typewriter wrapperClassName="greeting" onInit={(typewriter) => {typewriter.typeString('Hi, ' + currentUser.displayName + '!').start()}}/>
            </h1>
            <Sheet currentUser={currentUser} db={db}/>
            <form onSubmit={submitEntry}>
                <input id="company-name" placeholder="Company Name" required></input>
                <input id="applied-on" placeholder="Applied On" required></input>
                <select id="status">
                    <option value="PENDING">PENDING</option>
                    <option value="REJECTED">REJECTED</option>
                    <option value="OFFER">OFFER</option>
                    <option value="INTERVIEW">INTERVIEW</option>
                    <option value="ONLINE-ASSESSMENT">ONLINE-ASSESSMENT</option>
                    <option value="CODING-CHALLENGE">CODING-CHALLENGE</option>
                </select>
                <input id="notes" placeholder="Notes"></input>
                <input type="submit" id="submit-entry"/>
            </form>
        </div>
        ) : (
            <div>
                <h1>Loading...</h1>
            </div>
            )
}
export default Tracker