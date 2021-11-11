import { useState } from 'react';

const BugEdit = ({ addNew }) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label> Project : </label>
            <select>
                <option value="">Select Project</option>
                <option value="1">Project 1</option>
                <option value="2">Project 2</option>
            </select>
            <button onClick={() => addNew(newBugName)}>Add New</button>
        </section>
    )
}

export default BugEdit;