/*ステップシーケンサー*/
import React, {useEffect, useRef} from "react";

function StepSequencer() {

	const audio_context = useRef();


	//オーディオファイル読み込み(非同期)
	const AudioFileLoad = (file_name) => {

		const p = new Promise((resolve, reject) => {

			let audio_data;

			//サウンドファイルディレクトリ
			const sound_dir = `${process.env.PUBLIC_URL}/Sounds/`;
			//console.log(sound_dir + file_name);
			//const sound_dir = `${"../../Data/Sounds"}/Sounds/`;
			const request = new XMLHttpRequest();
			request.open('GET', sound_dir + file_name, true);
			request.responseType = 'arraybuffer';

			request.onload = () => {
				console.log("test");
				//レスポンス受け取る
				audio_data = request.response;
				//console.log(audio_data);
				resolve(audio_data);
				
			};

			request.send();

			

		});
		
		return p;

	};

	//初期化
	useEffect(() => {
		audio_context.current = new AudioContext();
		console.log("1");

		const data = AudioFileLoad("step-sequencer_dtmf.mp3");
		data.then((decode) => {
			console.log(decode);
		});

	


		


		console.log("2");
		//FileLoad("step-sequencer_dtmf.mp3");
		//SetUp();
		//SetUp();
	},[]);

	const FileLoad = async (file_name) => {
		//サウンドファイルディレクトリ
		const sound_dir = `${process.env.PUBLIC_URL}/Sounds/`;
		const request = new XMLHttpRequest();
		request.open('GET', sound_dir + file_name, true);
		request.responseType = 'arraybuffer';

		request.onload = () => {
			const audioData = request.response;
			console.log(audioData);
		};

	}





	//読み込み初期化
	const SetUp = async () => {
		const sample = await AudioFileLoad("step-sequencer_dtmf.mp3");

		console.log(sample);
	};

	/*スケジューリング関連*/
	let tempo = 60.0;
	const lookahead = 25.0;
	//オーディオのスケジュールをどのくらい先に進めるか(sec)
	const schedule_ahead_time = 0.1;

	//現在再生しているノート
	let current_note = 0;
	//次のノート
	let next_note_time = 0.0;

	
	//ノートを進める処理
	const NextNote = () => {

		const seconds_per_beat = 60.0 / tempo;
		//最後のビート時間にビート長を追加します
		next_note_time += seconds_per_beat;

		//ノート番号をインクリメント
		current_note++;

		//最後のノートに到達したら
		if(current_note === 4) {
			current_note = 0;
		}

	};

	//再生するノートのキュー
	const notes_In_queue = [];

	//スケジューリングされた処理
	const ScheduleNote = (beat_number, time) => {
		//再生していない場合でも、キューにノートをプッシュ
		notes_In_queue.push({note: beat_number, time: time});

		//再生
	};

	let timer_id;
	//スケジューリング
	const Scheduler = () => {
		while(next_note_time < audio_context.current.currentTime + schedule_ahead_time) {
			//スケジューリングされた処理
			ScheduleNote(current_note, next_note_time);
			//次のノートに進める
			NextNote();
		}
		timer_id = window.setTimeout(Scheduler, lookahead);
	};

	return(
		<div>
			<p>ステップシーケンサー</p>
		</div>
	);

}

export default StepSequencer;