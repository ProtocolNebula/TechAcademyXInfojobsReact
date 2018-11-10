import Todo from '../components/Todo'


export default function runMain() {
    return (
        <div className="app">
            <Todo />
            <style jsx>{`
                .app {
                    max-width: 500px;
                    margin: 100px auto 0;
                }
            `}</style>
        </div>
    )
}
