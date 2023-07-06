import React from 'react'
import "./Home.css"
import Card from '../Card'
import { Button } from '../Button'
import scroll from '../../Images/scroll.svg'
import logo from '../../Images/Logo.png'
import novo from '../../Images/NOVO.jpeg'

function Home() {
    return (
    
    <div className='Home'>
      
        <section class="one">
          <main className='testimonial-grid'>
            <article className='testimonial'>
              <h2 className='AboutMe'>Software Developer</h2>
              <p className='personal'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className='buttons'>
                <button className='projectsButton'>
                  Projects
                </button>
                <button className='contactButton'>
                  Contact me
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
        <section class="two">
          <main className='screenGrid'>
            <div className="subheading">
              <h2>
                Projects
              </h2>
            </div>
            <main className='project-grid'>
                <article className='project'>
                  <div className='imgBox'>
                    
                  </div>
                  <div className='textBox'>
                    <h2 className='boxTitle'>Novo.ai</h2>
                    <p className='descript'>
                      A solo developed chrome extension that uses image recognition technology to provide users sustainable alternatives to fast fashion clothes	
                    </p>
                    <div className='technologies'>
                      <div className='JavaScript'>
                          JavaScript
                        </div>
                        <div className='HTML'>
                          HTML
                        </div>
                        <div className='CSS'>
                          CSS
                        </div>
                        <div className='Gcloud'>
                          Gcloud
                        </div>
                    </div>
                  </div>
                </article>
              
                <article className='project'>
                <div className='imgBox2'></div>
                  <h2 className='boxTitle'>Box3</h2>
                  <p className='descript'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
                  </p>
                </article>
                <article className='project'>
                  <div className='imgBox3'></div>
                  <h2 className='boxTitle'>Box4</h2>
                  <p className='descript'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
                  </p>
                </article>
              </main>
            </main>
          </section>
        <section class="three">
          <h1>3</h1>
        </section>
    </div>
    
   
  )
}

export default Home
