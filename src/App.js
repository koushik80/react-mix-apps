import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

const App = () => {
  return (
    <div>
      <div style={{alignItems: "center", justifyContent: "center", display: "flex", color: "Teal"}}>
        <h1>Personal Digital Assistants</h1>
      </div>
      <div>
        <img src={AlexaImage} alt="re" />
        <ProfileCard title="Alexa" handle="@alexa99" />
      </div>
      <div>
        <img src={CortanaImage} alt="re" />
        <ProfileCard title="Crotana" handle="@crotana32" />
      </div>
      <div>
        <img src={SiriImage} alt="re" />
        <ProfileCard title="Siri" handle="@siri01" />
      </div>
    </div>
  )
}

export default App
