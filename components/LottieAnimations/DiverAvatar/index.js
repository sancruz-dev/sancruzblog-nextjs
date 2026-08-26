// import Lottie from "react-lottie";
import { useState } from "react";
import animationData from './animDiverAvatar.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false,
});

export function DiverAvatar() {
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
      <div className="flex justify-center items-center w-full" >
        <div className="pointer-events-none">
          <Lottie
            options={defaultOptions}
            direction={animationState.direction}
            height={300}
            width={300}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </div>
    </>
  );
}