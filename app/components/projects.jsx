import { Link, useLoaderData } from '@remix-run/react'
import React from 'react'
import {BsGithub} from 'react-icons/bs'


const Projects = ({projectsList}) => {

  return (
    <div>
        <h3>Projects</h3>

        {
          !projectsList ? <p className='alert'>Content not found!</p> 
          : ( <div>
            {
              projectsList.map((e) => {
                return (
                  <>
                    <h1>{e.attributes.title}</h1>
                    <p>{e.attributes.description}</p>
                    <p>{e.attributes.updateAt}</p>
                    <img src={e.attributes?.image.data.attributes.formats.small.url} alt = {'bla'}></img> 
                    <Link to={e.attributes.github}>
                    <BsGithub/>
                    </Link>
                    <Link to={e.attributes.link}>
                    Live Project
                    </Link>
                  
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