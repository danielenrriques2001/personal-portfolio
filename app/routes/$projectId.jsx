import { Link, useLoaderData, useParams } from "@remix-run/react";
import { getProject } from "../models/projects.server";
import ProjectItem from "../components/projectItem";

export async function loader({ params }){
  const id = params.projectId;
  const project = await getProject(id)

  if(project.data.length === 0) {
    throw new Response('', {
        status: 404,
        statusText: 'project Not Found'
    })
}
  return project
}

export function meta({data}) {
  if(!data) {
      return [
        {
          title: 'Daniel Mercedes - Project Not Found',
          description: `portfolio, web developer, junior developer, berlin, tech, programming, code`
        }
      ]
          
      
  }
  return [
    {
      title: `Daniel Mercedes - ${data?.data[0]?.attributes?.title.toUpperCase()}`,
      description: `project, web dev, portfolio - ${data.data[0]?.attributes?.title}`
     
    }

  ]
  }


export default function Project() {

  const project = useLoaderData();

  const projectInfo = project?.data[0];

  return (
          <div className="project__container container">
            <div>

            </div>
            <h2>{projectInfo.attributes?.title}</h2>
              <img 
                src={projectInfo.attributes?.image.data.attributes.formats.small.url}
                className="image__item"
                alt={'this is image background item'}
                >
                
              </img>
              <p>{projectInfo.attributes?.description}</p>
              <div className="project__container-links">
        
                <Link to={projectInfo.attributes?.github}>Github</Link>
                <Link to={projectInfo.attributes?.link}>Live Project</Link>
              </div>
                  
                 
          
          </div>
        

        )
}