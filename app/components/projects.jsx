import { Link, useLoaderData } from '@remix-run/react'
import React from 'react'
import {BsGithub} from 'react-icons/bs'


const Projects = ({projectsList}) => {

  if(!projectsList) return <h3>hola</h3>
  return (
    <div>
        <h3>Projects</h3>

        <div>
          
            <h1>{projectsList[0].attributes.title}</h1>
            <p>{projectsList[0].attributes.description}</p>
            <p>{projectsList[0].attributes.updateAt}</p>
            <img src={projectsList[0].attributes?.image.data.attributes.formats.small.url} alt = {'bla'}></img> 
            <Link to={projectsList[0].attributes.github}>
            <BsGithub/>
            </Link>
            <Link to={projectsList[0].attributes.link}>
            Live Project
            </Link>
           
        </div>
    </div>
  )
}

export default Projects