import BugStats from './components/BugStats'
import BugEdit from './components/BugEdit'
import BugSort from './components/BugSort'
import BugList from './components/BugList'

const Bugs = ({bugs, addNew, toggle, remove, removeClosed}) => {
    return(
        <div>
            <h1>Bug Tracker</h1>
            <hr />
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} />
            <BugSort/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}

export default Bugs;