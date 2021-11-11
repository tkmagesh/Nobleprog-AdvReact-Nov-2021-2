function removeClosed(bugs /* TO BE FIXED */){
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    const action = { type : 'BUGS_REMOVE', payload : bugsToRemove };
    return action;
}
export default removeClosed;