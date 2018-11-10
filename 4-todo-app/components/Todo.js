import react, { Component } from 'react'
import TodoInput from '../components/TodoInput'

class Todo extends Component {
    state = {
        elements: []
    }

    /**
     * Añade un elemento recibido desde el input
     * @param {string} text 
     */
    handleAddElement = (text) => {
        console.log('Text received')
    }

    handleInputChange = inputValue => {
        this.setState(() => ({
            inputValue
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