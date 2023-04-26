import { Link } from '@remix-run/react'
import {BsGithub} from 'react-icons/bs'
const ProjectItem = ({title, description, updateat, image, github, projectlink}) => {



  return (
    <div className='project__container'>
                    <img src={image} alt = {'bla'}></img> 
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{updateat}</p>


                    <div className='project__container-links'>
                      <Link to={github}
                            target='blank_'                    
                      >
                      <BsGithub/>
                      </Link>
                      <Link to={projectlink}
                            target='blank_'
                      >
                      Live Project
                      </Link>

                    </div>
                   
                   
                  

    </div>
  )
}

export default ProjectItem