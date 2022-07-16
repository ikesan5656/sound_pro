import { useLayoutEffect, useState } from "react";

const useCanvasResize = () => {
	const [size, setSize] = useState({width: 0, height: 0});

	useLayoutEffect(() => {

		const updateSize = () => {
			setSize({...size, width: window.innerWidth, height: window.innerHeight});
		};

		let timeoutId;

		window.addEventListener('resize', () => {
			if(timeoutId) {
				return;
			}

			timeoutId = setTimeout( () => {
				updateSize();
				timeoutId = 0;
			}, 500)
		});

		updateSize();

		return () => window.removeEventListener('resize', updateSize);

	},[]);

	return {size};

};

export default useCanvasResize;