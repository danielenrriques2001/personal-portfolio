export async function getProjects() {
    
    const response = await fetch(`https://portfolio-backend-6b9i.onrender.com/api/projects?populate=*`);
    try {
       
        return await response.json()
    } catch (error) {
        return await error.status(500)
    }
    
  
}

export async function getProject(id) {
    
    const response = await fetch(`https://portfolio-backend-6b9i.onrender.com/api/projects?filters[id]=${id}&populate=image`);
    try {
       
        return await response.json()
    } catch (error) {
        return await error.status(500)
    }
    
  
}

