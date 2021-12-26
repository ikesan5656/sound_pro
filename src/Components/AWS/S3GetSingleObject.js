/*S3バケット内の特定のファイル情報を取得*/
import AWS from 'aws-sdk';

export function S3GetSingleObject(){
	//const aws = require('aws-sdk');
	//IAMユーザーを使った認証方法(EC2を使用すればアクセスキー等は不要)
	AWS.config.update({	
		region: process.env.REACT_APP_REGION,  // ここでは東京リージョンを入力
		accessKeyId: process.env.REACT_APP_ACCESS_ID,
		secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
	});
	const s3 = new AWS.S3();
	
	const params = {
		Bucket: process.env.REACT_APP_BUCKET_NAME, 
		Key: '06 負けないで.mp3'
	};

	const GetS3File = async() => {
		const file_info = await s3.getObject(params).promise();
		//ファイル情報の中身
		console.log(file_info);
		//file_info.res
		return file_info.Body.buffer;
	};

	return GetS3File();
}

