const StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = null;

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function'){
            _callbacks.push(callback);
        }
    }

    //private utility function
    function _notifyCallbacks(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        _notifyCallbacks();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function'){
            throw new Error('Reducer is mandatory to create the store!')
        }
        _reducer = reducer;
        //to initialize the store state with a valid default state
        _currentState = reducer(undefined, {type: '@@INIT'});
        const store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };

})()