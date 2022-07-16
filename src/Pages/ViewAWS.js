/*AWSテスト用画面*/
import React, {useRef, useState, useEffect} from "react";
import S3ListObjectGet from "../Components/AWS/GetS3ListObject";
import PlayTest from "../Components/Audio/PlayTest";
import { CognitoManager } from "../Components/AWS/CognitoManager";



function ViewAWS() {

	const cognitoManager = new CognitoManager()

	const signUp = () => {
		cognitoManager.signUp("ikesan5656", "POke5656.3142", "you1207.ike@gmail.com")
	};

	useEffect(() => {
		//cognitoManager.signUp()
	},[]);




	return(
		<div>
			
			<p>AWSテスト</p>
			<PlayTest/>
			<button onClick={signUp}>signUp</button>
	

		</div>
	);
}

export default ViewAWS;