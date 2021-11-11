import axios from 'axios';

let currentProjectId = 5;

function getLocalProjects(){
    const initialState = [
        {id : 1, title : '[L] Bug Tracker'},
        {id : 2, title : '[L] Expense Manager'},
        {id : 3, title : '[L] Time Tracker'},
    ];
    return initialState;
}

const projectActionCreators = {
    load(){

        axios.get('http://localhost:3030/projects')
            .then(response => response.data)
            .then(projects => console.table(projects));

        const projects = getLocalProjects()
        const action = { type : 'PROJECTS_LOAD', payload : projects};
        return action;
    },
    addNew(projectTitle){
        const newProject = { id : ++currentProjectId, title : projectTitle};
        const action = { type : 'PROJECTS_ADD', payload : newProject };
        return action;
    }
}

export default projectActionCreators;