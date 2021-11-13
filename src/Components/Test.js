import React, {useEffect, useRef} from "react";

function Test() {

	const element_parent = useRef();
	const child = useRef();

	//初期化
	useEffect(() => {
		//element_parent.current = document.querySelectorAll(".parent");
		//console.log(element_parent.current);
		//child.current = element_parent[0].current.querySelectorAll("button");
		console.log(element_parent.current.children[0]);
	},[]);

	return(
		<div className="parent" ref={element_parent}>
			<button>test1</button>
			<button>test2</button>
		</div>
	)
}

export default Test;