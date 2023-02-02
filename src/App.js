import React from 'react'
import ProfileCard from './ProfileCard'

const App = () => {
  return (
    <div>
      <div style={{alignItems: "center", justifyContent: "center", display: "flex", color: "Teal"}}>
        <h1>Personal Digital Assistants</h1>
      </div>
      <div>
        <img src="https://i.ibb.co/QNfqQp8/reindeer.jpg" alt="re" />
        <ProfileCard title="Alex" handle="@alexa99" />
      </div>
      <div>
        <img src="https://i.ibb.co/QNfqQp8/reindeer.jpg" alt="re" />
        <ProfileCard title="Crotana" handle="@crotana32" />
      </div>
      <div>
        <img src="https://i.ibb.co/QNfqQp8/reindeer.jpg" alt="re" />
        <ProfileCard title="Siri" handle="@siri01" />
      </div>
    </div>
  )
}

export default App
