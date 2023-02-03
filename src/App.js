import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

const App = () => {
  return (
    <div>
      <div>
        <h1>Personal Digital Assistants</h1>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard title="Crotana" handle="@crotana32" image={CortanaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
