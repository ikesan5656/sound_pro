/*PixiCanvasラッパーコンポーネント*/
import './EditorCanvas.css'
import { Stage } from "@inlet/react-pixi";
import useEditorCanvasResize from '../../../CustamHooks/useEditorCanvasResize';

function EditorCanvas() {

	const { size } = useEditorCanvasResize();

	return(

		<div id="editorCanvasContainer">
			<Stage
				id="editorCanvas"
				width={size.width}
				height={size.height}
			>
	</Stage>
		</div>
	);
}

export default EditorCanvas;