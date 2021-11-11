import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import projectActionCreators from "./actions";

const Projects = () => {
    const { load, addNew } = bindActionCreators(projectActionCreators, useDispatch());
    const projects = useSelector(state => state.projectsState);
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