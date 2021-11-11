import bugApi from '../services/bugApi';

function load(){
    return function(dispatch){
        return bugApi.getAll().then(bugs => {
            dispatch({type: 'BUGS_LOAD', payload: bugs});
        });
    }
}

export default load;