import { createStore } from 'redux'
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

//const store = createStore(bugsReducer);
const store = createStore(projectsReducer);
export default store;