import bugApi from '../services/bugApi';

function remove(bugToRemove){
    return function(dispatch){
        bugApi.remove(bugToRemove).then(() => {
            dispatch({type: 'BUGS_REMOVE', payload: [bugToRemove]});
        });
    };
}
export default remove;