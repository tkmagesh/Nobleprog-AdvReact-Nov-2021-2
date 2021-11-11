let currentProjectId = 5;
const projectActionCreators = {
    load(){
        const action = { type : 'PROJECTS_LOAD' }
        return action;
    },
    addNew(projectTitle){
        const newProject = { id : ++currentProjectId, title : projectTitle};
        const action = { type : 'PROJECTS_ADD', payload : newProject };
        return action;
    }
}

export default projectActionCreators;