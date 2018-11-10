import React, { Component } from 'react';

// function increment(prevState) {
//     return {
//         count: prevState.count + 1
//     }
// }

class Counter extends Component {
    // constructor(props) {
    //     super(props);

    //     // Inicializacion metodo "clasico"
    //     // this.state = {
    //     //     count: props.initialCount || 0
    //     // }

    //     // Bindeamos la funcion con el objeto que se crea (no necesario con flat-arrow)
    //     this.increment = this.increment.bind(this);
    // }

    // Mejora inicializacion de parametros
    state = {
        count: this.props.initialCount || 0
    }

    // Evitamos bind si usamos flat-arrow "() =>"
    handlerIncrement = () => {
        // Incrementando mutando el estado
        // this.setState(increment);
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));

        // Reemplazando el objeto completamente
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    render () {
        // onClick={() => console.log('clicked')
        return (
            <div 
                style={{ border: '1px solid red' }} 
                onClick={this.handlerIncrement}
            >
                <h1>{ this.state.count }</h1>
            </div>
        )
    }

    // #region ciclos de vida

    /**
     * Depecrated
     * Se llamara una unica vez cuando el componente se monte
     */
    componentWillMount() {
    }

    /**
     * Depecrated
     * Llamado cuando cambia una propiedad antes de cambiar el estado (y llamar a render)
     */
    componentWillReceiveProps(nextProps) {
    }

    /**
     * Llamado justo antes de llamar a render
     * @return bool Si devuelve true se llama a render
     */
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentsWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    // #endregion
}

export default Counter;