import React from 'react'
import styles from "~/styles/about.module.css";

const AboutMe = () => {
  return (
    <div className='about' id='story'>

      <div class="custom-shape-divider-bottom-1682513625">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
            
          

      <div className='container container-about'> 
         <h2>My Story</h2>
         <p className='border_bottom'>A really short one.</p>
      </div>

        <p>
        
          I'm Daniel Mercedes, a Junior Software Developer originally from La Romana, 
          Dominican Republic, currently based in Berlin, Germany. 
          I'm passionate about Psychology, Languages, 
          and Well-being and enjoy reading, learning new languages,
          practicing yoga, and spending time in nature.
            
        </p>
    </div>
  )
}

export default AboutMe