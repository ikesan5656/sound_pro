/*Daw編集画面の親コンポーネント*/
import { useEffect, useState, useRef } from "react";
import { Stage } from "@inlet/react-pixi";
import * as PIXI from 'pixi.js'
import "./DawEditor.css";
import useResize from "../../CustamHooks/useResize";
import { useWindowSize } from "react-use";
import { useDidUpdateEffect } from "../../CustamHooks/useDidUpdateEffect.js";
import useCanvasResize from "../../CustamHooks/useCanvasResize";
import EditorHeader from "./Parts/EditorHeader";
import EditorCanvas from "./Parts/EditorCanvas";

function DawEditorTest() {
	useEffect(() => {}, []);

  //const { size } = useCanvasResize();
	const pixiApp = useRef(null);

  /*const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth * 0.8 - 10,
    height: window.innerHeight - 50 - 10,
  });*/

  useEffect(() => {
    console.log("初回描画");
		//const app = createPixiCanvas();
		//const dawEditorContainer = document.getElementById("dawEditorContainer");
		//コンテナ用divへPixiCanvasを追加
		//dawEditorContainer.appendChild(app.view);
		//window.addEventListener('resize', resizeWindow);
		
    //width.current = 50
  },[]);

	const resizeWindow = () => {
		//メインキャンバスのリサイズ
		const mainCanvas = document.getElementById("myCanvas");
		//mainCanvas.width = window.innerWidth;
		//mainCanvas.height = window.innerHeight;

		//Pixiメインステージのリサイズ
		pixiApp.current.renderer.resize(window.innerWidth, window.innerHeight);
	}

  //PixiCanvas作成
  const createPixiCanvas = () => {
    let bw = 1200;
    let bh = 800;
    let app = new PIXI.Application({
      width: bw,
      height: bh,
      backgroundColor: 0x2980b9,
      antialias: true,
      transparent: true,
    });
		app.view.id="editorCanvas";

		app.renderer.autoResize = true;
		app.stage.interactive = true;

		return app;

  };

  return (

    <div id="dawEditorContainer">
			<EditorHeader/>
			<EditorCanvas/>

		</div>
  );
}

export default DawEditorTest;
