import logo from './logo.svg';

export default function Header(props){
    return (
    <header className="App-header">
        <h1>{props.text}</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </header>
    );
};