// import Lottie from "react-lottie";
import { useState } from "react";
import animationData from './animOctopus.json';
import styles from "../../Layout.module.css"

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false,
});

export function Octopus() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  })
  return (
    <>
      <div className={styles.shark} >
        <div className="pointer-events-none">
          <Lottie
            options={defaultOptions}
            direction={animationState.direction}
            height={200}
            width={200}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </div>
    </>
  );
}