import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import './Sheet.css'

import Entry from './Entry'

const Sheet = ({currentUser, db}) => {
    const [entries, setEntries] = useState([])
    useEffect(() => {
        db.collection('users').doc(currentUser.email).onSnapshot((doc) => {
            if(!!doc.data()) {
                let entryObject = {}
                for(let entry of Object.entries(doc.data())) {
                    entryObject[entry[0]] = entry[1]
                }
                setEntries(entryObject)
            }
        })
    }, [])
    const editEntryTitle = (e, companyName) => {
        e.defaultPrevented = true
        e.persist()
        let prevValues = {
            companyName: e.target.innerHTML,
            appliedon: entries[companyName].appliedon,
            status: entries[companyName].status,
            notes: entries[companyName].notes
        }
        let updated = {
            [e.target.innerHTML]: prevValues
        }
        db.collection('users').doc(currentUser.email).update(updated)
        if(e.target.innerHTML !== companyName) db.collection('users').doc(currentUser.email).update({[companyName]:firebase.firestore.FieldValue.delete()});
    }
    const editEntry = (e, companyName) => {
        e.defaultPrevented = true
        e.persist()
        const property = e.target.attributes[1].name
        let updated = {}
        updated[companyName] = {...entries[companyName]}
        updated[companyName][property] = e.target.innerHTML
        db.collection('users').doc(currentUser.email).update(updated)
    }
    const editEntryStatus = (e, companyName) => {
        e.defaultPrevented = true
        e.persist()
        let updated = {}
        updated[companyName] = {...entries[companyName]}
        updated[companyName]['status'] = e.target.value
        db.collection('users').doc(currentUser.email).update(updated)
    }
    const deleteEntry = (e, companyName) => {
        e.preventDefault()
        e.persist()
        db.collection('users').doc(currentUser.email).update({[companyName]:firebase.firestore.FieldValue.delete()})
    }
    return(
        <div className='Sheet'>
            <Entry/>
            {
                Object.keys(entries).map((entry) => {
                    return <Entry key={entry} entry={entries[entry]} editEntryTitleCallback={(e) => editEntryTitle(e, entry)} editEntryCallback={(e) => editEntry(e, entry)} editEntryStatusCallback={(e) => editEntryStatus(e, entry)} deleteCallback={(e) => deleteEntry(e, entry)}/>
                })
            }
        </div>
    )
}
export default Sheet