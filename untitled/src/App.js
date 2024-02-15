import logo from './ic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="nume">
            Prepelița Valentin
        </p>
          <p id="grupa">
              CR-222
          </p>
      </header>
    </div>
  );
}

export default App;
