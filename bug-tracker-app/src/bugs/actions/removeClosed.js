import remove from './remove'
function removeClosed(){
    return function(dispatch, getState){
        const bugs = getState().bugsState;
        const bugsToRemove = bugs.filter(bug => bug.isClosed);
        bugsToRemove.forEach(bug => remove(bug)(dispatch));
    }
}
export default removeClosed;