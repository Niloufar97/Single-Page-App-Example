import './skillBar.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect, useRef } from 'react';
export default function SkillBar({persentage}){
  const colorRef = useRef(null)
  useEffect(() => {
    if (colorRef.current) {
      const inner = colorRef.current.querySelector(".progress-bar");
      if ( inner ) {
         inner.style.backgroundColor = "#86C3B2";
      }
    }
  }, [colorRef]);


  const now = persentage;
  return <ProgressBar variant="costum-color" now={now} label={`${now}%`} ref={colorRef} />;
}
