import './TopHeader.css';

function TopHeader() {

	return(
		<div>
			<nav className="top_header">
				<ul>
					<li><a href="/">ビートメーカー</a></li>
					<li><a href="/redux_test">Redux</a></li>
					<li><a href="/">test3</a></li>
					<li><a href="/">test4</a></li>
				</ul>
			</nav>
		</div>
	);

}

export default TopHeader;