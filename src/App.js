import logo from './logo.svg';
import './App.css';
import MidiConnect from './Components/MidiConnect';
import ToneSimplePlay from './Components/ToneSimplePlay';
import Test from './Components/Test';
import StepSequencer from './Components/StepSequencer/StepSequencer';

function App() {
  return (
    <div className="App">
			<StepSequencer/>

			{/*<MidiConnect/>
			<ToneSimplePlay/>*/}
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
	</header>*/}
    </div>
  );
}

export default App;
