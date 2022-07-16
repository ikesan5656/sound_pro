import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

export default function useResize() {
  const [ windowWidth, setWindowWidth ] = useState(0);
  const [ windowHeight, setWindowHeight ] = useState(0);
	const [windowSize, setWindowSize] = useState({width: 0, height: 0});

	const [windowResizing, setWindowResizing] = useState(false);

  useEffect(() => {
    window.removeEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize, {
      passive: true
    });

		let timer = 0;
    if (timer > 0) {
      clearTimeout(timer);
			setWindowResizing(true);
    }
 
    timer = setTimeout(function () {
			//if(windowResizing) {
			//setWindowResizing(false);
			handleResize();
			//}
    }, 3000);
 

		
    return () => {
      window.removeEventListener('resize', handleResize);

    }
		
  }, []);

  function handleResize() {
    //setWindowWidth(window.innerWidth);
    //setWindowHeight(window.innerHeight);
		setWindowSize({...windowSize, width: window.innerWidth, height: window.innerHeight})
  }

  return {windowSize};
}