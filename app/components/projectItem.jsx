import { redirect } from '@remix-run/node'
import { Link, useNavigate } from '@remix-run/react'
import {BsGithub} from 'react-icons/bs'
const ProjectItem = ({title, description, updateat, image, github, projectlink, id}) => {



  return (
    <div className='project__container'>
                
                     
                    <Link to={`/${id}`}>
                   
                      <div 
                        className='img__container-dinamic'
                        >
                        <img src={image} alt = {'bla'}></img> 
                      </div>
                   
                    </Link>
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