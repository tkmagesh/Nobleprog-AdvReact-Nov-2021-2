function addNew(bugName){
    const newBug = {
        id : ++currentBugId,
        name : bugName,
        isClosed : false,
        createdAt : new Date()
    }
    const action = { type : 'BUGS_ADD', payload : newBug };
    return action;
}
export default addNew;