const initialState = [
    {id : 1, title : 'Bug Tracker'},
    {id : 2, title : 'Expense Manager'},
    {id : 3, title : 'Time Tracker'},
]
function projectsReducer(currentState = [], action) {
    if (action.type === 'PROJECTS_ADD') {
        return [...currentState, action.payload]
    }
    if (action.type === 'PROJECTS_LOAD'){
        return initialState
    }
    return currentState;
}

export default projectsReducer