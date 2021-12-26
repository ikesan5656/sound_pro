import AWS, { Response } from 'aws-sdk';

export function GetS3ListObject () {

	//const aws = require('aws-sdk');
	//IAMユーザーを使った認証方法(EC2を使用すればアクセスキー等は不要)
	AWS.config.update({	
		region: process.env.REACT_APP_REGION,  // ここでは東京リージョンを入力
		accessKeyId: process.env.REACT_APP_ACCESS_ID,
		secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
	});
	const s3 = new AWS.S3();
	
	
	// 全てのオブジェクトキーを走査してキーリストを作る
	let keyList = [];


	// パラメータ作成
	const params = {
		Bucket: process.env.REACT_APP_BUCKET_NAME,  // バケット名
		
	};

	const GetS3List = async() => {
		// オブジェクトのリストを取得
		const res = await s3.listObjectsV2(params).promise();
		return res;	
	}

	console.log(GetS3List());

	return GetS3List();


	/*(async() => {
		// オブジェクトのリストを取得
		const res = await s3.listObjectsV2(params).promise();
		//res = await s3.listObjectsV2(params).promise();
		console.log(res);
		//keyList = res.Contents;
		//console.log(keyList);
		
		// オブジェクトキー (Key属性) だけ取り出してキーリストに追加
		res.Contents.map(v => v.Key).forEach(v => {
			keyList.push(v);
		});
		return res;	
	})().then(()=> {
		console.log(keyList);
		
		
	})*/

	/*(async() => {
		// オブジェクトのリストを取得
		const res = await s3.listObjectsV2(params).promise();
		return res;	
		
	})();*/

	
	//console.log(keyList);
		
	
		// listObjectsV2 が一度に取得できるのは1000件まで
		// リストが切り詰められている場合は IsTruncated がtrueになる
		/*if (!res.IsTruncated) {
			break;
		}*/
		
		// 次の読み込み開始位置を保存
		//continuationToken = res.NextContinuationToken;
	
	

		
		// 全てのオブジェクトを処理
		/*for (let key of keyList) {
			// オブジェクトを取得
			const res = await s3.getObject({
				Bucket: process.env.REACT_APP_BUCKET_NAME,
				Key: key
			}).promise();
			
			// ファイル本文 (Buffer) をUTF-8でデコード
			const body = res.Body.toString('utf8');
			
			// 1行目だけコンソールに出力
			console.log(key + ' ->', body.split('\n')[0].trim());
		}*/
		
	

	//console.log(keyList);
	



}
