import React, { useEffect } from 'react'
import ContentEditable from 'react-contenteditable'
import './Entry.css'
import * as deleteBtnIcon from '../../Assets/delete-btn.png'

const Entry = ({entry=null, editEntryTitleCallback=null, editEntryCallback=null, editEntryStatusCallback=null, deleteCallback}) => {
    useEffect(() => {
        !entry ? console.log() : document.getElementById(entry.status).value = entry.status
    }, [])
    return(
        <div className='Entry' id={!entry ? 'header' : null}>
            {
                !entry
                ? <div className='HeaderCell'>Company Name</div>
                : <ContentEditable className='Cell Left' html={entry.companyName} companyname={entry.companyName} onBlur={(e, entry) => editEntryTitleCallback(e, entry)}/>
            }
            {
                !entry
                ? <div className='HeaderCell'>Applied On</div>
                : <ContentEditable className='Cell' html={entry.appliedon} appliedon={entry.appliedon} onBlur={(e) => editEntryCallback(e)}/>
            }
            {
                !entry
                ? <div className='HeaderCell'>Status</div>
                : 
                <select className='Cell' status={entry.status} html={entry.status} id={entry.status} onBlur={(e) => editEntryStatusCallback(e)}>
                    <option value="PENDING">PENDING</option>
                    <option value="REJECTED">REJECTED</option>
                    <option value="OFFER">OFFER</option>
                    <option value="INTERVIEW">INTERVIEW</option>
                    <option value="ONLINE-ASSESSMENT">ONLINE-ASSESSMENT</option>
                    <option value="CODING-CHALLENGE">CODING-CHALLENGE</option>
                </select>
            }
            {
                !entry
                ? <div className='HeaderCell'>Notes</div>
                : <ContentEditable className='Cell Right' html={entry.notes} notes={entry.notes} onBlur={(e) => editEntryCallback(e)}/>
            }
            {!entry ? null : <button onClick={deleteCallback} id="delete-button"><img src={deleteBtnIcon.default} id="delete-button-icon"/></button>}
        </div>
    )
}
export default Entry