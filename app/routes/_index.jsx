import { getProjects } from "../models/projects.server";
import AboutMe from "../components/aboutme";
import Projects from "../components/projects";
import { useLoaderData } from "@remix-run/react";
// export const loader = async () => {
  
//   return getProjects();
// }
export const meta = () => {
  return [
    { 
      title: "Daniel Mercedes Portfolio",
      description: `Daniel Mercedes' Portfolio, tech, junior software developer, tech, javascript`,
  }
  ];
};

export default function Index() {

  // const {data : projectsList} = useLoaderData();
   

  return (
    <div>
      <main>
        <AboutMe/>
        <Projects
          // projectsList = {projectsList}
        />
      </main>
    </div>
  );
}