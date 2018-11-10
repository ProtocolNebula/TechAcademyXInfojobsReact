import react, { Component } from 'react'
import Input from './Input'
import PropTypes from 'prop-types'

class TodoInput extends Component {
    static PropTypes = {
        onAdd: PropTypes.func.isRequired,
    }

    state = {
        todo: '',
        otherInput: '',
    }

    handleChange = todo => {
        this.setState(() => ({ todo }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (this.state.todo) {
            this.props.onAdd(this.state.todo)
            this.setState(() => ({ todo: '' }))
        }
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <Input
                    onChange={this.handleChange}
                    value={this.state.todo}
                    name="todo"
                    placeholder="Write a todo"
                />
            </form>
        )
        // <button type="submit">
        //     Add Task
        // </button>
    }
}

export default TodoInput;