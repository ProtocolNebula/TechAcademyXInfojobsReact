import React, { Component } from 'react'


export default class TodoListItem extends Component {
    handleRemove = () => {
        this.props.onRemove(
            this.props.idx
        )
    }

    render() {
        console.log('list item');
        return (
            <li>
                { this.props.children }
                <button
                    onClick={this.handleRemove}
                >
                    x
                </button>
            </li>
        )
    }
}