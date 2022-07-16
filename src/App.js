import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MidiConnect from './Components/MidiConnect';
import ToneSimplePlay from './Components/ToneSimplePlay';
import Test from './Components/Test';
import StepSequencer from './Components/StepSequencer/StepSequencer';
import TopHeader from './Components/Generic/TopHeader';
import ReduxTestView from './Pages/ReduxTestView';

import HeaderNav from './Components/Generic/Navigation/HeaderNav';
import ViewAWS from './Pages/ViewAWS';
import S3ManagerView from './Pages/S3ManagerView';
import S3StorageView from './Pages/S3StorageView';
import DawEditor from './Components/DawEditor/DawEditor';
import DawEditorTest from './Components/DawEditor/EditorTest';

function App() {
  return (
    <div className="App">
			{/*<TopHeader/>*/}
			<BrowserRouter>
				<HeaderNav/>
				<Routes>
					{/*<Route exact path="/" element={<StepSequencer/>}/>
					<Route path="/redux_test" element={<ReduxTestView/>}/>
					<Route path="/aws_test" element={<ViewAWS/>}/>*/}
					<Route exact path="/" element={<DawEditorTest/>}/>
					{/*<Route exact path="/s3_manage" element={<S3ManagerView/>}/>
					<Route exact path="/s3_storage" element={<S3StorageView/>}/>*/}
				</Routes>
			</BrowserRouter>

			
			

			{/*<MidiConnect/>
			<ToneSimplePlay/>*/}

    </div>
  );
}

export default App;
