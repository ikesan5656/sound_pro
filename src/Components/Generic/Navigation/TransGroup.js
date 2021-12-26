import './TransGroup.css';
import { Link } from 'react-router-dom';
function TransGroup() {
	return(
		<div className='transition_group'>
			<Link to="/s3_manage"><p>S3 Manager</p></Link>
			<Link to="/s3_storage"><p>S3 Storage</p></Link>
	</div>
	)
}

export default TransGroup;