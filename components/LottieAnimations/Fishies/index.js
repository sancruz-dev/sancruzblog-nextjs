import Lottie from "react-lottie";
import { useState } from "react";
import animationData from './animFishies.json';
import styles from "../../Layout.module.css"

export function Fishies() {
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
      <div className={`${styles.swim} mr-96`}>
        <div className="pointer-events-none">
          <Lottie
            options={defaultOptions}
            direction={animationState.direction}
            height={400}
            width={400}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </div>
    </>
  );
}