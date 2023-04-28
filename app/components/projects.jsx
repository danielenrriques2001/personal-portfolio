import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = ({projectsList}) => {

  return (
    <div className='projects' id='projects'>

                        
        <h2>Projects</h2>
        {
          !projectsList ? <p className='alert'>Content not found!</p> 
          : ( <div className='projects__container'>
            {
              projectsList.map((e) => {
                return (
                  <>
                  <ProjectItem
                    key={e.attributes?.github}
                    title = {e.attributes?.title}
                    description ={e.attributes?.description}
                    updateat ={e.attributes?.updateAt}
                    github ={e.attributes?.github}
                    projectlink ={e.attributes?.link}
                    image = {e.attributes?.image.data.attributes.formats.small.url}
                    id = {e.id}
                  />
                   
                </>
                )
              })
            }
          
         
         
      </div>)
        }

      <div class="custom-shape-divider-top-1682704980">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>

       
    </div>
  )
}

export default Projects