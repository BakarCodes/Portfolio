import React, { useRef } from 'react'
import "./Home.css"
import novo from "../Images/Novo.jpg"
import go from "../Images/Go.jpg"
import wrappify from "../Images/Wrappify.jpg"
import Sidebar from '../Sidebar';  // Import your Sidebar component
import CV from '../Images/AbubakarCV.pdf'

function Home() {
    // Create refs
    const oneRef = useRef(null);
    const twoRef = useRef(null);
    const threeRef = useRef(null);
    const fourRef = useRef(null);
    const fiveRef = useRef(null);
    
    return (
    
      <div className='Home'>
      <Sidebar oneRef={oneRef} twoRef={twoRef} threeRef={threeRef} fourRef={fourRef} fiveRef={fiveRef} />
          <section ref={oneRef} class="one">
            <h1 className='title'>
              BAKAR
            </h1>
            <h2 className='subheading'>
              SOFTWARE ENGINEER
            </h2>
            <p className='location'>
              LONDON
            </p>
          </section>
          <section ref={twoRef} class="two">
          <main className='testimonial-grid'>
            <article className='testimonial'>
            <h2 className='AboutMe'>Professional Experience</h2>
              <div>
                <h4 className='Company'>Lobby</h4>
                <h5 className='roleName'> Software Engineer</h5>
                <p className='personal'>
                  Aided in user interface design, developed and maintained vital backend databases with SQL. Integral in developing infrastructure as code, effectively managing project deadlines. Gained in-depth understanding of Agile work environment and team roles. Proactively sought feedback for professional growth and skill enhancement.
                </p>
                <div className='technologies'>
                  <p className='js'>
                    React
                  </p>
                  <p className='html'>
                    JSX
                  </p>
                  <p className='css'>
                    CSS
                  </p>
                  <p className='gcloud'>
                    RestAPI
                  </p>
                </div>
              </div>
              <div>
                <h4 className='Company'>Made By Fire</h4>
                <h5 className='roleName'>Software Engineer</h5>
                <p className='personal'>
                  Monitored, managed, and maintained test and production environments, optimising for availability, performance, and security. Designed front-end and back-end of the app, integrating Google APIs and SWIFT, meeting project timelines. Enhanced communication and teamwork skills through participation in daily Scrum stand-ups and Sprint Retrospectives.
                </p>
                <div className='technologies'>
                  <p className='js'>
                    React
                  </p>
                  <p className='html'>
                    JSX
                  </p>
                  <p className='css'>
                    CSS
                  </p>
                  <p className='gcloud'>
                    RestAPI
                  </p>
                </div>
              </div>

            </article>
            <article className='testimonial'>
            <h2 className='AboutMe'>Who am I?</h2>
              <p className='personal'>
                I am a junior developer with one year of experience under my belt in both web application and mobile applications as well as being a Computer Science graduate at Brunel University London. Adept Software Engineer with proficiency in designing, implementing, and sustaining applications across
diverse programming languages. Demonstrated track record in supporting complete project lifecycles,
deploying a range of technologies and frameworks. Extensive experience in Agile methodology lifecycles. 
              </p>
              
              <div className='buttons'>
                <button className='projectsButton'>
                  <a className='projects' href="https://www.github.com/bakarcodes" target="_blank" rel="noopener noreferrer">Projects</a>
                </button>
                <a className='contactButton' href={CV} target='_blank' rel='noopener noreferrer'>
                  View CV
                </a>
              </div>

            </article>
          </main>
          </section>
          <section ref={threeRef} class="three">
          <div className='image-grid2'>
          <div className='imageTwo'>
                  <img src={wrappify} className='go' alt='go_image'/>
                </div>
              <div className='projectTwo'>
                <div className='projectTitle'>
                  01
                </div>
                <div className='projectTwoDesc'>
                  With Wrappify, you gain instant access to your personalized music journey using SpotifyAPI, spanning up to a whole year from today. With just a few taps users can gather data on their spotify listens, as I want users to explore the melodies that have shaped your year. Music discovery with an instant result was the goal of wrappify, click the link to check it out.
                </div>
                <div className='technologies'>
                  <p className='js'>
                    React
                  </p>
                  <p className='html'>
                    JSX
                  </p>
                  <p className='css'>
                    CSS
                  </p>
                  <p className='gcloud'>
                    RestAPI
                  </p>
                </div>
                <div className='links'>
                <button className='github'>
                    <a className="githubLink" href="https://www.github.com/bakarcodes" target="_blank" rel="noopener noreferrer">Github</a>
                </button>
                  <a className='wrappifyButton' href="https://www.wrappify.uk/" target="_blank" rel="noopener noreferrer">Check Wrappify</a>
                </div>
            </div>
          </div>
          </section>
          <section ref={fourRef} class="four">

          <div className='image-grid'>
              <div className='projectOne'>
                <div className='projectTitle'>
                  02
                </div>
                <div className='projectDesc'>
                  Novo is a chrome extension that targets fast fashion companies to provide sustainable alternatives from used marketplaces through image recognition technology. I built this extension as final year project and continued development post submission. Through a combination of technological such as Google Cloud Vision and a Kaggle database, this project garnered successful results.
                </div>
                <div className='technologies'>
                  <p className='js'>
                    JavaScript
                  </p>
                  <p className='html'>
                    HTML
                  </p>
                  <p className='css'>
                    CSS
                  </p>
                  <p className='gcloud'>
                    Gcloud
                  </p>
                </div>
                <div className='links'>
                <button className='github'>
                    <a className="githubLink" href="https://github.com/BakarCodes/novo-web-fyp" target="_blank" rel="noopener noreferrer">Github</a>
                </button>
               
                </div>
              </div>
  
                <div className='image'>
                  <img src={novo} className='novo' alt='novo_image'/>
                </div>
            </div>

          </section>
          <section ref={fiveRef} class="five">
          <div className='image-grid2'>
          
            <div className='imageTwo'>
                    <img src={go} className='go' alt='go_image'/>
                  </div>
                <div className='projectTwo'>
                  <div className='projectTitle'>
                    03
                  </div>
                  <div className='projectTwoDesc'>
                  Go Green aims to encourage individuals to adopt sustainable practices and play an active role in preserving the planet. The project was developed using ReactJS, providing a user-friendly interface and smooth navigation for visitors. It started as a personal initiative and evolved into an ongoing effort to create a positive impact on the environment and society.
                  </div>
                  <div className='technologies'>
                    <p className='js'>
                      React
                    </p>
                    <p className='html'>
                      JSX
                    </p>
                    <p className='css'>
                      CSS
                    </p>
                    <p className='gcloud'>
                      RestAPI
                    </p>
                  </div>
                  <div className='links'>
                  <button className='github'>
                      <a className="githubLink" href="https://github.com/BrunelCS/cs2001-2021_22-group13-2021" target="_blank" rel="noopener noreferrer">Github</a>
                  </button>
                  </div>
              </div>
  
            </div>
  
          </section>
      </div>
    )
  }

export default Home
