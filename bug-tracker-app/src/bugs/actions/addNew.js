
import bugApi from '../services/bugApi';

function addNew(bugName, projectId){
    return function(dispatch){
        const newBugData = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date(),
            projectId : projectId
        }
        return bugApi.save(newBugData).then(newBug => {
            const action = { type : 'BUGS_ADD', payload : newBug };
            dispatch(action);
        });
    }
}
export default addNew;