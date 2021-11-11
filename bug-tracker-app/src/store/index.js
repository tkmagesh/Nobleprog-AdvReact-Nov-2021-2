import { createStore, combineReducers, applyMiddleware } from 'redux'
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

//const store = createStore(bugsReducer);
//const store = createStore(projectsReducer);

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

/* 
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log('Before ', store.getState())
            console.log('Action ', action)
            next(action);
            console.log('After ', store.getState())
            console.groupEnd();
        }
    }
} 
*/

const loggerMiddleware = ({dispatch, getState}) => next => action => {
    console.group(action.type);
    console.log('%c Before ', 'color : blue', getState())
    console.log('%c Action ', 'color : red', action)
    next(action);
    console.log('%c After ', 'color : green', getState())
    console.groupEnd();
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
export default store;