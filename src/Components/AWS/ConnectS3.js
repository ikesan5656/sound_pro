//AWS関連インポート
import AWS from 'aws-sdk';
import cors from 'cors';
//import express from 'express';


function ConnectS3 () {
	const async = require('async');
	//S3バケット名
	const bucket_name = process.env.REACT_APP_BUCKET_NAME;
	//S3リージョン
	const region = process.env.REACT_APP_REGION;

	// Amazon Cognito 認証情報プロバイダーを初期化します
	//AWS.config.region = 'ap-northeast-1'; // リージョン
	/*const my_credentials = new AWS.CognitoIdentityCredentials({
	    IdentityPoolId: 'ap-northeast-1:f038605c-8629-4893-bf4b-4a60c1978558',
	});*/
	
	AWS.config.update({
		//credentials: my_credentials, 
		/*credentials: new AWS.Credentials(
      process.env.REACT_APP_ACCESS_ID,
      process.env.REACT_APP_ACCESS_KEY
    ),*/
		region: region,
		accessKeyId: process.env.REACT_APP_ACCESS_ID,
		secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
		//apiVersion: '2006-03-01'
	});

	//console.log(myConfig);
	//S3オブジェクト取得
	const s3 = new AWS.S3({apiVersion: '2012-10-17'});
	console.log(s3);


	console.log("バケット名 " + bucket_name);
	console.log("リージョン " + region);

	/*AWS.config.update({
		region: region,
		credentials: my_credentials
	})*/



	//自分のS3バケット一覧を表示する
	/*const MyS3List = (callback) => {
		s3.listBuckets((err, data) => {
			console.log("My buckets now are:\n");
			for (let i = 0; i < data.Buckets.length; i++) {
				console.log(data.Buckets[i].Name);
			}
			console.log("Success", data.Buckets);
		});
	};*/

	(async() => {
		await s3.listBuckets(function(err, data) {
			if (err) {
				console.log("Error", err);
			} else {
				console.log("Success", data.Buckets);
			}
		}).promise();
	})();
	//MyS3List();

	//const app = express();
	//app.use(cors({ origin: true, credentials: false }))
	//console.log(app);

	return(
		null
	)
}

export default ConnectS3;