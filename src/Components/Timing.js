/*再生タイミング*/
import React, {useEffect, useRef} from "react";


function Timing() {

	const audio_context = useRef();

	//初期化
	useEffect(() => {
		audio_context.current = new AudioContext();
	},[]);

	return(
		<div>

		</div>
	);
}

export default Timing;