/*ヘッダコンポーネント*/
import {Link} from "react-router-dom";
import './HeaderNav.css';
import Title from './Title';
import TransGroup from "./TransGroup";
function HeaderNav() {
	return(
		<div id="headerNav" className="header_nav">
			<Title/>
			<TransGroup/>
		</div>
	)
};

export default HeaderNav;