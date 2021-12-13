//Redux関連のhooks
import { useSelector, useDispatch } from 'react-redux';
//スライス
import {Say} from '../Components/Redux/TestSlice';
//import AudioManager from '../Components/Audio/AudioManager';

function ReduxTestView() {
	//store内の値を取得
	const message = useSelector(state => state.message.mess);
	//const ctx = AudioManager();

	return(
		<div>
			<p>ReduxTest</p>
			<p>{message}</p>
		</div>
	);
}

export default ReduxTestView;