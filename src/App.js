import logo from './logo.svg';
import yourname from './yourname.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={yourname} className="App-logo" alt="logo" />
        <p>
          My name is Kari Sakib and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/karisakib"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
