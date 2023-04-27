export async function getProjects() {
    
    const response = await fetch(`http://localhost:1337/api/projects?populate=*`);
    try {
       
        return await response.json()
    } catch (error) {
        return await error.status(500)
    }
    
  
}

export async function getProject(id) {
    
    const response = await fetch(`http://localhost:1337/api/projects?filters[id]=${id}&populate=image`);
    try {
       
        return await response.json()
    } catch (error) {
        return await error.status(500)
    }
    
  
}

