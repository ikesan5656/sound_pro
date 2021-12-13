/*AWSテスト用画面*/

import ConnectS3 from "../Components/AWS/ConnectS3";
import TestAws from "../Components/AWS/TestAws";
import S3ObjectGet from "../Components/AWS/S3ObjectGet";
import S3ObjectGetV2 from "../Components/AWS/S3ObjectGetV2";

function ViewAWS() {
	return(
		<div>
			<p>AWSテスト</p>
			<S3ObjectGetV2/>
			{/*<ConnectS3/>*/}
			{/*<TestAws/>*/}
		</div>
	);
}

export default ViewAWS;