const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const reactElement = (
    <header className="site-headrer">
        <h1>Hello, there! </h1>
        <h2>React slogan</h2>
    </header>
);

root.render(reactElement); 