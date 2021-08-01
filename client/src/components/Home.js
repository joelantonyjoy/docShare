import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
    <div style={styles.app}>
      <h1>DocShare</h1>
      <p>Edit documents together !</p>
      <Link style={styles.link} to='/doc'>Start writing</Link>
    </div>
    )
}

const styles = {
    app: {
        backgroundColor: '#336b87',
        height: '100vh',
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    link: {
        backgroundColor: 'white',
        color : 'black',
        padding: '16px 32px',
        textDecoration :'none'
    }
}
