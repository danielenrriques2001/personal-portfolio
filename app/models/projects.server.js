export async function getProjects() {
    const response = await fetch(`http://localhost:1337/api/projects?populate=*`);
    return await response.json()
}

