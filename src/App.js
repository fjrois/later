import './App.css';
import ActionBar from './ActionBar';
import Board from './Board';
import NavButton from './NavButton';

function App() {
  return (
    <div className="box">
      <header className="row header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <NavButton>Later</NavButton>
        <NavButton>Today</NavButton>
        <NavButton>Tomorrow</NavButton>
      </header>
      <div className="row content">
        <Board />
      </div>
      {/* <div className="row footer"> */}
      <div className="row footer">
        <p>footer (fixed height)</p>
      </div>
      <div className="bottom-bar">
        <ActionBar />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
