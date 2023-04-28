import { redirect } from '@remix-run/node'
import { Link, useNavigate } from '@remix-run/react'
import {BsGithub} from 'react-icons/bs'

const ProjectItem = ({title, description, updateat, image, github, projectlink, id}) => {

  const router = useNavigate();
  const redirectPage = (id) => {
    router(`/${id}`)
  }

  console.log(router)


  return (
    <div className='project__container'>
                
                     
                   
                   
                      <div 
                        className='img__container'
                        onClick={()=> {redirectPage(id)}}
                        >
                        <img src={image} alt = {'bla'}></img> 
                        <Link to={`/${id}`}>Read More</Link>
                      </div>
                 
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{updateat}</p>


                    <div className='project__container-links'>
                      <Link to={github}
                            target='blank_'                    
                      >
                      <BsGithub/>
                      Source Code
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