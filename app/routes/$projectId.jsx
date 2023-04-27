import { useLoaderData, useParams } from "@remix-run/react";
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
          <>
                <ProjectItem
                    key={projectInfo.attributes?.github}
                    title = {projectInfo.attributes?.title}
                    description ={projectInfo.attributes?.description}
                    updateat ={projectInfo.attributes?.updateAt}
                    github ={projectInfo.attributes?.github}
                    projectlink ={projectInfo.attributes?.link}
                    image = {projectInfo.attributes?.image.data.attributes.formats.small.url}
                    id = {projectInfo.id}
                  />
          
          </>
        

        )
}