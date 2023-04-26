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
                  />
                   
                </>
                )
              })
            }
          
         
         
      </div>)
        }

        

       
    </div>
  )
}

export default Projects