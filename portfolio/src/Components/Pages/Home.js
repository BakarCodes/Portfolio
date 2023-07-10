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
        </section>
        <section class="two">
          <div className='image-grid'>
            <div className='projectTitle'>
              Novo
            </div>
              <div className='image'>
                <img src={novo} className='novo' alt='novo_image'/>
              </div>
          </div>
        </section>
    </div>
    
   
  )
}

export default Home
