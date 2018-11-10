import react, { Component } from 'react'

class Task extends Component {
    STATES = {
        TODO: 0,
        DONE: 1,
        DELETED: 2
    }

    state = {
        text: '',
        status: STATES.TODO
    }

    render() {
        retrun (
            
        )
    }
}

export default Task;