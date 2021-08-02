import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
    const [docID, setDocID] = useState("")
    return (
    <div className={styles.app}>
      <div className={styles.descriptionContainer}>
        <h1>DocShare</h1>
        <p>Edit documents together !</p>
      </div>
      <Link className={styles.link} to='/doc'>Start writing</Link>
      <p>Or</p>
      <p>Join editing with friend</p>
      <input onChange={(e)=>{setDocID(e.target.value)}} placeholder="Enter the doc Id" type="text"/>
      <Link className={styles.link} to={`/doc/${docID}`} >Enter Editing</Link>
    </div>
    )
}
