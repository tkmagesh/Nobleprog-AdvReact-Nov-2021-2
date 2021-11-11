function bugsReducer(currentState = [], action){
    if (action.type === 'BUGS_ADD'){
        return [...currentState, action.payload];
    }
    if (action.type === 'BUGS_REPLACE'){
        return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
    }
    if (action.type === 'BUGS_REMOVE'){
        return currentState.filter(bug => !action.payload.find(b => b.id === bug.id));
    }
    if (action.type === 'BUGS_LOAD'){
        return action.payload;
    }
    return currentState;
}
export default bugsReducer;