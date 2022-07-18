/*ヘッダコンポーネント*/
import {Link} from "react-router-dom";
import './HeaderNav.css';
import Title from './Title';
import TransGroup from "./TransGroup";
import UserIcon from "./UserIcon";
function HeaderNav() {
	return(
		<div id="headerNav" className="header_nav">
			<Title/>
			<TransGroup/>
			<UserIcon/>
		</div>
	)
};

export default HeaderNav;