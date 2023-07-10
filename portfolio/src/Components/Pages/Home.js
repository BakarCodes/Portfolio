import React from 'react'
import "./Home.css"
import novo from "../Images/Novo.jpg"

function Home() {
    return (
    
    <div className='Home'>
        <section class="one">
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
        <section class="two">
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
        <section class="three">
        <div className='image-grid2'>
        
          <div className='imageTwo'>
                  <img src={novo} className='novo' alt='novo_image'/>
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
        <section class="four">

        </section>
    </div>
    
   
  )
}

export default Home
