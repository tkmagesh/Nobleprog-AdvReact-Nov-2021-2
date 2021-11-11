let currentBugId = 0;

function addNew(bugName, projectId){
    const newBug = {
        id : ++currentBugId,
        name : bugName,
        isClosed : false,
        createdAt : new Date(),
        projectId : projectId
    }
    const action = { type : 'BUGS_ADD', payload : newBug };
    return action;
}
export default addNew;