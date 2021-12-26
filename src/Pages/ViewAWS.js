/*AWSテスト用画面*/
import S3ListObjectGet from "../Components/AWS/GetS3ListObject";
import PlayTest from "../Components/Audio/PlayTest";

function ViewAWS() {
	return(
		<div>
			
			<p>AWSテスト</p>
			<PlayTest/>
	

		</div>
	);
}

export default ViewAWS;