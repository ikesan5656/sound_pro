//import Amplify from 'aws-amplify';
import { Auth, Amplify } from 'aws-amplify';


export class CognitoManager{

	//初期化
	constructor(){
		/*Amplify.configure({
			Auth: {
			aws_project_region: process.env.REACT_APP_REGION,
			aws_cognito_identity_pool_id: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
			aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
			aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
			aws_user_pools_web_client_id: process.env.REACT_APP_AWS_USER_POOLS_CLIENT_ID
			}
		});*/

		const cognitoConstants = {
			aws_project_region: process.env.REACT_APP_REGION,
			aws_cognito_identity_pool_id: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
			aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
			aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
			aws_user_pools_web_client_id: process.env.REACT_APP_AWS_USER_POOLS_CLIENT_ID
		};

		//const currentConfig = Auth.configure();
		//console.log(currentConfig)
		Amplify.configure(cognitoConstants)

	}

	//サインアップ
	signUp(userName, passWord, email){
		Auth.signUp({
			username: userName,
			password: passWord,
			attributes: {
				email: email
			}
		})
		.then((result) => {
			console.log(result)
		})
		.catch((err) => {
			console.log(err)
		})
		//console.log(userName)
	}


}

