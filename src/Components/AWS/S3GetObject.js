/*S3バケット内の特定のファイル情報を取得*/
import AWS from 'aws-sdk';
import AudioManager from '../Audio/AudioManager';

function S3GetObject(){
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
		Key: '魔王魂  8bit18.mp3'
	};

	//オーディオモジュール
	const audio_ctx = AudioManager();
	

	//ファイル取得
	const GetS3File = async() => {
		const file_info = await s3.getObject(params).promise();
		//ファイル情報の中身
		//console.log(file_info.Body.buffer);
		//file_info.res
		return file_info.Body.buffer;
	};
	let source;
	//再生
	const PlayAudio = () => {
		const res_data = GetS3File();
		res_data.then((result) => {
			audio_ctx.GetAudioCtx().decodeAudioData(result).then((decode_data) => {
				source = audio_ctx.MakeSource(decode_data);
				audio_ctx.Play(source);
			})
		});
	
		/*audio_ctx.GetAudioCtx().decodeAudioData(res_data).then((decode_data) => {
			source = audio_ctx.MakeSource(decode_data);
			audio_ctx.Play(source);
		})*/
		 
	}

	return(
		<div>
			<button onClick={PlayAudio}>再生</button>
		</div>
	);
}

export default S3GetObject;