/*タイトル表示用*/
import {Link} from "react-router-dom";
import './Title.css';

function Title() {
	return(
		<div className="app_title">
			<Link to="/"><p>SoundPro</p></Link>
		</div>
	);
}

export default Title;