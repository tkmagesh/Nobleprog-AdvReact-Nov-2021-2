import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import BugStats from './components/BugStats'
import BugEdit from './components/BugEdit'
import BugSort from './components/BugSort'
import BugList from './components/BugList'
import bugActionCreators from './actions'

const Bugs = () => {
    //creating action dispatchers
    const dispatch = useDispatch()
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch)
    const { addNew, toggle, remove, removeClosed } = bugActionDispatchers;

    //extracting state from store
    const bugs = useSelector(storeState => storeState.bugsState)
    
    return(
        <div>
            <h2>Bugs</h2>
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} />
            <BugSort/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}

export default Bugs;