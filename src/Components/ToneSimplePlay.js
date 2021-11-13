import * as Tone from 'tone';
import React, {useEffect, useRef} from "react";

function ToneSimplePlay() {

	const synth = useRef();

	//初期化
	useEffect(() => {
		synth.current = new Tone.Synth().toDestination();
	},[]);

	const Play = () => {
		synth.current.triggerAttackRelease("C4", "8n");
	};

	return(
		<div>
			<button onClick={Play}>再生</button>
		</div>
	);
}

export default ToneSimplePlay;