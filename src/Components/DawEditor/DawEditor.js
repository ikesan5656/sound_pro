/*Daw編集画面の親コンポーネント*/
import { useEffect, useState, useRef } from 'react';
import {Stage} from '@inlet/react-pixi';
import './DawEditor.css';
import useResize from '../../CustamHooks/useResize';
import {useWindowSize} from 'react-use';
import { useDidUpdateEffect } from '../../CustamHooks/useDidUpdateEffect.js';
import useCanvasResize from '../../CustamHooks/useCanvasResize';

function DawEditor(){

	const width = useRef(1000);

	useEffect(() => {

	},[]);

	//const { windowWidth, windowHeight } = useResize();
	//const { width, height } = useWindowSize();
	//const {windowSize/*, windowHeight*/} = useResize();
	
	const {size} = useCanvasResize();

	const[canvasSize, setCanvasSize] = useState({width: window.innerWidth * 0.8 - 10, height: window.innerHeight -50  - 10});

	/*useEffect(() => {
		console.log("初回描画");
		const editorContainer = document.getElementById("dawEditorContainer");
		const header = document.getElementById("headerNav");
		console.log(header.clientHeight)
		const containerHeight = size.height - header.clientHeight;
		editorContainer.style.height = containerHeight + "px";
		setCanvasSize({width: editorContainer.clientWidth - 10, height: document.documentElement.clientHeight -50  - 10})
	},[])*/

	//stateに関係なく初回描画時にのみ行う処理
	/*useDidUpdateEffect(() => {
		console.log(size)
		const editorContainer = document.getElementById("dawEditorContainer");
		const header = document.getElementById("headerNav");
		console.log(header.clientHeight)
		const containerHeight = size.height - header.clientHeight;
		editorContainer.style.height = containerHeight + "px";
		setCanvasSize({width: editorContainer.clientWidth - 10, height: containerHeight - 10})
	}, [size]);*/

	useEffect(() => {
		console.log("再描画")
		//width.current = 50
	})
	
	const onClick = () => {
		width.current = 50
	}
	//マウント時に実行されないuseEffect
	/*useDidUpdateEffect(() => {
		console.log("リサイズ");
	}, [width, height]);*/

	/*useDidUpdateEffect(() => {
		console.log("リサイズ")
		console.log(windowSize)
	},[windowSize])*/


	return(
		<div id="dawEditorContainer">
			
			{/*<p style={{margin: '0px'}}>test</p>*/}
			<Stage
				id="editorCanvas"
				width={width.current}
				height={canvasSize.height}
			>
				
			</Stage>
			<button onClick={onClick}>
				test
			</button>
		</div>
	);
}

export default DawEditor;