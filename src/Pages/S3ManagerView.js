/*S3管理画面*/
//import S3ListObjectGet from "../Components/AWS/GetS3ListObject";
import React, {useRef, useState, useEffect} from "react";
import S3BucketInfo from "../Components/S3Manager/S3BucketInfo";
import { GetS3ListObject } from "../Components/AWS/GetS3ListObject";
function S3ManagerView() {

	return(
		<div>
			<p>S3管理画面</p>
			<S3BucketInfo/>
		</div>
	)
}

export default S3ManagerView;