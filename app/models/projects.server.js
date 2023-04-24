export async function getProjects() {
    
    const response = await fetch(`http://localhost:1337/api/projects?populate=*`);
    try {
       
        return await response.json()
    } catch (error) {
        return await error.status(500)
    }
    
  
}

