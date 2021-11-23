import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MidiConnect from './Components/MidiConnect';
import ToneSimplePlay from './Components/ToneSimplePlay';
import Test from './Components/Test';
import StepSequencer from './Components/StepSequencer/StepSequencer';
import TopHeader from './Components/Generic/TopHeader';
import ReduxTestView from './Pages/ReduxTestView';

function App() {
  return (
    <div className="App">
			<TopHeader/>

			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<StepSequencer/>}/>
					<Route path="/redux_test" element={<ReduxTestView/>}/>
				</Routes>
			</BrowserRouter>

			
			

			{/*<MidiConnect/>
			<ToneSimplePlay/>*/}

    </div>
  );
}

export default App;
