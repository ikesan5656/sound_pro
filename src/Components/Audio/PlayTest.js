/*再生テストを行う*/
import React, {useRef} from "react";
import AudioManager from "./AudioManager";
import { S3GetSingleObject } from "../AWS/S3GetSingleObject";
function PlayTest() {
	const audio_manager = AudioManager();
	const source = useRef();
	const is_play = useRef(false);
	
	//再生停止
	const PlayAndStop = () => {
		is_play.current = !is_play.current;
		//再生
		if(is_play.current === true) {
			const res = S3GetSingleObject();
			res.then((audio_data) => {
				//console.log(audio_data);
				audio_manager.GetAudioCtx().decodeAudioData(audio_data).then((decode_data) => {
					source.current = audio_manager.MakeSource(decode_data);
					audio_manager.Play(source.current);
				});
			})
		//停止
		}else{
			audio_manager.Stop(source.current);
		}

	};
	return(
		<button onClick={PlayAndStop}>Test再生</button>
	);
};

export default PlayTest;