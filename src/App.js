import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";


function App(){
    return(
    <div>
        <section className='hero is-primary'>
            <div className='hero-body'>
              <p className='title'>Personal Digital Assistance </p>
            </div>
        </section>
        <div className='container'>
            <section className='section'>
                <div className='columns'>
                    <div className='column is-4'>
                      <ProfileCard 
                      title='Alexa'
                      handle='alexa99'
                      image={AlexaImage}
                      description="Alexa was created by Amazon"
                         />
                    </div>
                    <div className='column is-4'>
                      <ProfileCard
                       title='cortona'
                       handle='cortona88' 
                       image={CortonaImage} 
                       description="Cortona was created by Microsoft"/>
                    </div>
                    <div className='column is-4'>
                      <ProfileCard 
                      title='siri' 
                      handle='siri77' 
                      image={SiriImage}
                      description='Siri was created by Apple'
                      />
                    </div>
                </div>
            </section>
        </div>

    </div>
    );
}

export default App;