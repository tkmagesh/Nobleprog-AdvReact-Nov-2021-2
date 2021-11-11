const Projects = ({projects, load}) => {
    return (
        <div className="projects">
        <h2>Projects</h2>
        <button onClick={load}>Load Projects</button>
        <ol>
            {projects.map(project => (
            <li key={project.id}>
                <div>{project.title}</div>
            </li>
            ))}
        </ol>
        </div>
    )
}

export default Projects;