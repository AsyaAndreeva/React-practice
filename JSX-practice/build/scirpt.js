var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

var reactElement = React.createElement(
    "header",
    { className: "site-headrer" },
    React.createElement(
        "h1",
        null,
        "Hello, there! "
    ),
    React.createElement(
        "h2",
        null,
        "React slogan"
    )
);

root.render(reactElement);