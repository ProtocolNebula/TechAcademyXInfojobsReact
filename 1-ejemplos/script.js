function Item({children}) {
    return <li>{children}</li>
}

function MyComponent({children}) {
    const foo = 'bar';

    return (
        <React.Fragment>
            <Item>{foo}</Item>,
            <Item>Uno</Item>
        </React.Fragment>
    )
}

function MyComponent2({count}) {
    return (
        <div>
            {count > 10 ? 'High' : 'Low'}
        </div>
    )
}

function MyComponent3({}) {
    return (
        <div id="content">
            Content
        </div>
    )

    // Transpila a:
    // return createElement(
    //     'div',
    //     { id: 'content' },
    //     'Content'
    // );
}

/**
 * 
 * @example
 *  <Modal active="true"></Modal> 
 */
function Modal({ children, active }) {
    return (
        //
    )
}


function Wrapper({ children }) {
    return (
        <div>
            Texto relleno
            {children}
            <span>Mas texto de relleno</span>
        </div>
    )
}