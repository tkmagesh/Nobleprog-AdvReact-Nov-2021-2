import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import projectActionCreators from "./actions";
import { useEffect } from 'react';

const Projects = () => {
    const { load, addNew } = bindActionCreators(projectActionCreators, useDispatch());
    useEffect(() => {
        load();
    },[])
    const projects = useSelector(state => state.projectsState);
    return (
        <div className="projects">
        <h2>Projects</h2>
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