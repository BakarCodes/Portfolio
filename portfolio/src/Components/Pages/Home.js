import React, { useRef } from 'react'
import "./Home.css"
import novo from "../Images/Novo.jpg"
import go from "../Images/Go.jpg"
import Sidebar from '../Sidebar';  // Import your Sidebar component

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
              SOFTWARE DEVELOPER 
            </h2>
            <p className='location'>
              LONDON
            </p>
          </section>
          <section ref={twoRef} class="two">
          <main className='testimonial-grid'>
            <article className='testimonial'>
              <h2 className='AboutMe'>ABOUT ME</h2>
              <p className='personal'>
                I am a junior developer with one year of experience under my belt in both web application and mobile applications. Adept Software Engineer with proficiency in designing, implementing, and sustaining applications across
diverse programming languages. Demonstrated track record in supporting complete project lifecycles,
deploying a range of technologies and frameworks. Extensive experience in Agile methodology lifecycles.
              </p>
              <div className='buttons'>
                <button className='projectsButton'>
                  Projects
                </button>
                <button className='contactButton'>
                  Download CV
                </button>
              </div>
            </article>
            
            <article className='testimonial'>
              <h2 className='AboutMe'>Box2</h2>
              <p> 
              </p>
            </article>
          </main>
          </section>
          <section ref={threeRef} class="three">
          <div className='image-grid'>
              <div className='projectOne'>
                <div className='projectTitle'>
                  01
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
                    <a href="https://www.github.com/bakarcodes" target="_blank" rel="noopener noreferrer">GITHUB</a>
                </button>
                </div>
              </div>
  
                <div className='image'>
                  <img src={novo} className='novo' alt='novo_image'/>
                </div>
            </div>
          
          </section>
          <section ref={fourRef} class="four">
          <div className='image-grid2'>
          
            <div className='imageTwo'>
                    <img src={go} className='go' alt='go_image'/>
                  </div>
                <div className='projectTwo'>
                  <div className='projectTitle'>
                    02
                  </div>
                  <div className='projectTwoDesc'>
                    Novo is a chrome extension that targets fast fashion companies to provide sustainable alternatives from used marketplaces through image recognition technology. I built this extension as final year project and continued development post submission. Through a variety of technological combination such as Google Cloud Vision and a Kaggle database, this project garnered successful results.
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
                      <a href="https://www.github.com/bakarcodes" target="_blank" rel="noopener noreferrer">GITHUB</a>
                  </button>
                  </div>
              </div>
  
            </div>
  
          </section>
          <section ref={fiveRef} class="five">
          </section>
      </div>
    )
  }

export default Home
