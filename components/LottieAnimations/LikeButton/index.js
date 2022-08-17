import { useState } from "react";
import Lottie from "react-lottie";
import animationData from './animHeart.json';

export function LikeButton() {
  const [isLiked, setLikeState] = useState(false);

  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false, direction: -1
  })

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
 
  return (
    <>
      <button 
        className='flex justify-center items-center w-20 h-20 bg-white rounded-full'
        onClick={() => {
          const reverseAnimation = -1
          const normalAnimation = 1

          setAnimationState({
            ...animationState,
            isStopped: false,
            direction: animationState.direction === normalAnimation
              ? reverseAnimation
              : normalAnimation
          })
          setLikeState(!isLiked);
        }}
      >
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
      </button>

      <span className="text-slate-900">
        {isLiked ? 1 : 0}
      </span>
    </>
  );
}