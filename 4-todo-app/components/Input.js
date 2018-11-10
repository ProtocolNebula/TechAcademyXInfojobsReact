        import react, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
    static propTypes = {
        name: PropTypes.string,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        value: PropTypes.string
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(
                e.currentTarget.value
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <input
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    className="full-input"
                    type="text"
                    onChange={this.handleChange}
                />
                <style jxs>{`
                    .full-input {
                        box-sizing: border-box;
                        display: block;
                        width: 100%;
                        height: 30px;
                        padding: 5px;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Input;