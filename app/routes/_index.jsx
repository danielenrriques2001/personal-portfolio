import { getProjects } from "../models/projects.server";
import AboutMe from "../components/aboutme";
import Projects from "../components/projects";
import { useLoaderData } from "@remix-run/react";
import Header from "../components/header";
import Stack from "../components/stack";

export const loader = async () => {
  const projects = await getProjects();
  if(projects.data.length === 0) {
    throw new Response('', {
        status: 404,
        statusText: 'project Not Found'
    })
}
  return projects
}
export const meta = () => {
  return [
    { 
      title: "Daniel Mercedes Portfolio",
      description: `Daniel Mercedes' Portfolio, tech, junior software developer, tech, javascript`,
  }
  ];
};

export default function Index() {

  const {data : projectsList} = useLoaderData();
   

  return (
    <div>
      <main>
        <Header/>
        <AboutMe/>
        <Stack/>
        <Projects
          projectsList = {projectsList}
        />
      </main>
    </div>
  );
}