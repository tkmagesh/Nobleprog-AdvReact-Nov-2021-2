import { useState } from 'react';

const BugEdit = ({ addNew, projects }) => {
    const [newBugName, setNewBugName] = useState('');
    const [projectId, setProjectId] = useState(projects[0].id);
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label> Project : </label>
            <select onChange={evt => setProjectId(parseInt(evt.target.value))}>
                { projects.map(project => <option key={project.id} value={project.id}>{project.title}</option>)}
            </select>
            <button onClick={() => addNew(newBugName, projectId)}>Add New</button>
        </section>
    )
}

export default BugEdit;