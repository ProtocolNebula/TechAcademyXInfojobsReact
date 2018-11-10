import react, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div className="wrapper" onClick={this.handleIncrement}>
                <h1>{this.state.count}</h1>
                <style jsx>{`
                    .wrapper {
                        
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Counter;