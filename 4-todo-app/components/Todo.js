import react, { Component } from 'react'
import TodoInput from '../components/TodoInput'
import Task from '../components/Task'
import TodoList from '../components/TodoList'
import TodoListItem from '../components/TodoListItem'

class Todo extends Component {
    state = {
        elements: [
        ]
    }

    /**
     * Añade un elemento recibido desde el input
     * @param {string} text 
     */
    handleAddElement = (text) => {
        this.setState((prevState) => ({
            elements: [
                ...prevState.elements,
                text
            ]
        }))
    }

    /**
     * Cambia el estado con el valor del input
     */
    handleInputChange = todoValue => {
        this.setState(() => ({
            todoValue
        }));
    }

    handleRemoveElement = (idx) => {
        this.setState((prevState) => ({
            elements: [
                ...this.state.elements.slice(0, idx),
                ...this.state.elements.slice(idx + 1),
            ]
        }));
    }

    render() {
        return (
            <div className="todo-box">
                <div className="input-new-task">
                    <TodoInput
                        onAdd={this.handleAddElement}
                    />
                </div>
                <div className="task-list">
                    <TodoList>
                        {
                            this.state.elements.map((todo, index) => {
                            return (<TodoListItem
                                idx={index}
                                onRemove={ this.handleRemoveElement }>
                                {todo}
                            </TodoListItem>)
                        })
                    }
                    </TodoList>
                </div>
            
                <style jsx>{`
                    .todo-box {
                        border: 1px solid #555;
                        -webkit-box-shadow: 3px 8px 35px -13px rgba(0,0,0,0.75);
                        -moz-box-shadow: 3px 8px 35px -13px rgba(0,0,0,0.75);
                        box-shadow: 3px 8px 35px -13px rgba(0,0,0,0.75);
                    }
                    .task-list {
                        max-height: 500px;
                        overflow: auto;
                    }
                `}</style>
            </div>
        )
    }
}

export default Todo