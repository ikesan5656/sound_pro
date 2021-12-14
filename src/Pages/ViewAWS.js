/*AWSテスト用画面*/

import S3ListObjectGet from "../Components/AWS/S3ListObjectGet";
import S3GetObject from "../Components/AWS/S3GetObject";

function ViewAWS() {
	return(
		<div>
			<p>AWSテスト</p>
			{/*<S3ListObjectGet/>*/}
			<S3GetObject/>

		</div>
	);
}

export default ViewAWS;