/*MIDI接続コンポーネント*/
import React, {useEffect} from "react";

function MidiConnect() {

	//MIDIデバイス情報
	let midi_devices = {
		inputs: {},
		outputs: {} 
	};

	//接続成功時処理
	const RequestSuccess = (data) => {
		console.log("success", data);

		//Inputデバイスの配列を作成
		let input_iterator = data.inputs.values();
		for (let input = input_iterator.next(); !input.done; input = input_iterator.next()) {
			let value = input.value;
			//デバイス情報を保存
			midi_devices.inputs[value.name] = value;
			//イベント登録
			value.addEventListener('midimessage', InputEvent, false);
		}

		//Outputデバイスの配列を作成

	};
	
	//接続失敗時処理
	const RequestError = (error) => {
		console.error("error", error);
	};

	//MIDIデバイスアクセス
	const RequestMidi = () => {

		if (navigator.requestMIDIAccess) {
			navigator.requestMIDIAccess().then(RequestSuccess, RequestError);
		}else{
			RequestError();
		}

	};

	//MIDIデバイスの入力受付時イベント
	const InputEvent = (e) => {
		//console.log("input", e);
		let target = e.target;
		//console.log(target.name);
		//let device = midi_devices.outputs[target.name];
		let message = '';
		let num_array = [];

		//2桁の16進数にして表示する
		e.data.forEach(function(val) {
			num_array.push(('00' + val.toString(16)).substr(-2));
		});

		message = num_array.join(' ');
		//InputしたDeviceに結果を送信する
		//device.send(e.data);

		console.log(message);
	};



	//初期化
	useEffect(() => {
		RequestMidi();
	},[]);

	return(
		<div>
			
		</div>
	)
}

export default MidiConnect;