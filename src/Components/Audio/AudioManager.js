/*WebAudioAPIの基本的な機能をラッパーしたコンポーネント*/
import React, {useRef} from "react";

const AudioManager = () => {

	/*----------------------------- 変数 ------------------------------*/
	//オーディオコンテキスト
	const ctx = useRef(new AudioContext());
	//マスター音量
	const master_gain = useRef(ctx.current.createGain());
	/*-----------------------------------------------------------------*/

	/*--------------------------- メソッド ----------------------------*/
	//オーディオソース作成
	const MakeSource = (decord_data) => {
		//バッファーソース作成
		const source = ctx.current.createBufferSource();
		source.buffer = decord_data;
		source.loop = true;
		return source;
	};

	//再生
	const Play = (source_data) => {
		//マスター音量セット
		master_gain.current.gain.value = 0.5;

		//各ノード接続
		source_data.connect(master_gain.current);
		master_gain.current.connect(ctx.current.destination);
		source_data.start();

	};
	//再生終了
	const Stop = (source_data) => {
		source_data.stop();
	};

	const GetAudioCtx = () => {
		return ctx.current;
	};
	/*-----------------------------------------------------------------*/


	//外部で使用するメソッドや変数を返す
	return {MakeSource, GetAudioCtx, Play};

};

export default AudioManager;