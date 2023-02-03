import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistants
          </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you to buy things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Crotana"
                handle="@crotana32"
                image={CortanaImage}
                description="Cortana was created by Microsoft and no idea what it does."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was created by Apple and it phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
