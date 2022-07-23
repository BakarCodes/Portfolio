import React from 'react'
import "./Home.css"
import Card from '../Card'

function Home() {
    return (
    
    <div className='Home'>
      
        <section class="one">
          <div className='text'>
            <h1 className='Greeting'>
              HELLO.
            </h1>
            <h2 className='Profession'>
                SOFTWARE ENGINEER
            </h2>
          </div>
          <div className='Scroll-down'>

          </div>
        </section>
        <section class="two">
          <main className='testimonial-grid'>
            <article className='testimonial grid-col-span2'>
              <h2 className='AboutMe'>Weather App</h2>
              <p> An iOS developed weather application. this utilised the framework of Xcode. </p>
            </article>
            
            <article className='testimonial'>
              <h2 className='AboutMe'>GoGreen</h2>
              <p> GoGreen’s main target is to provide a simple system where users can interactively recycle.</p>
            </article>
            <article className='testimonial'>
              <h2 className='AboutMe'>OTIO</h2>
              <p>	
              </p>
            </article>
            <article className='testimonial'>
              <h2 className='AboutMe'>OTIO</h2>
              <p>	
              </p>
            </article>
            
          </main>
        </section>
        <section class="three">
          <h1>3</h1>
        </section>
    </div>
    
   
  )
}

export default Home
