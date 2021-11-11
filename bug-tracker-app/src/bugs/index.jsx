import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import BugStats from './components/BugStats'
import BugEdit from './components/BugEdit'
import BugSort from './components/BugSort'
import BugList from './components/BugList'
import bugActionCreators from './actions'
import { useEffect } from 'react';


const Bugs = () => {
    //creating action dispatchers
    const dispatch = useDispatch()
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch)
    const { addNew, toggle, remove, removeClosed, load } = bugActionDispatchers;
    const { bugsState, projectsState : projects  } = useSelector(storeState => storeState);
    const bugs = bugsState.map(bug => ({...bug, projectTitle : projects.find(project => project.id === bug.projectId).title}))
    useEffect(() => {
        load();
    },[])
    return(
        <div>
            <h2>Bugs</h2>
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} projects={projects} />
            <BugSort/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}

export default Bugs;