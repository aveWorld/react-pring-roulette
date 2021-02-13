import React, { useState, useRef, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from './useMeasure';
import { nanoid } from 'nanoid';
import * as easings from 'd3-ease';
import './App.css';

function App() {
  console.log(data);
  const [bind, { width: screenWidth }] = useMeasure();
  const blocksAmount = 100;
  const blocksOnScreen = 6;
  const gap = 5;
  const fullWidth = (blocksAmount * (screenWidth - 5 * gap)) / blocksOnScreen;
  const [animate, setAnimate] = useState(false);
  const [canAnimate, setCanAnimate] = useState(true);
  const disableAnim = useRef(false);
  const [winnerBlock, setWinnerBlock] = useState();
  const [scrollStep, setStep] = useState(1.11);
  const { o } = useSpring({
    o: animate ? 1 : 0,
    from: { o: 0 },
    immediate: disableAnim.current,
    onRest: () => {
      disableAnim.current = true;
      setCanAnimate(true);
      disableAnim.current = false;
    },
    reset: true,
    config: {
      duration: 4000,
      easing: easings.easeCircleOut,
    },
  });

  const { opacity } = useSpring({
    from: { opacity: 0 },
    opacity: canAnimate ? 1 : 0,
  });

  const handleClick = () => {
    setCanAnimate(false);
    if (winnerBlock) {
      setArr((prev) => [...prev.splice(winnerBlock - 2, blocksOnScreen), ...prev]);
    }
    const blocks = document.querySelector('.blocks__wrapper');
    if (blocks && animate) {
      setAnimate(false);
    }
    const random = (Math.random() + 2.2) * 0.5;
    setStep(random);
    const scrollWidth = (screenWidth / random + 1) * counter;
    const winnerIndex = Math.ceil(scrollWidth / (screenWidth / blocksOnScreen + gap)) + 2; // 6 - amount of blocks on a screen, + 2 because we start with 3-rd block
    setWinnerBlock(winnerIndex);
    setAnimate((prev) => !prev);
  };
  const counter = fullWidth / screenWidth;
  const [arr, setArr] = useState(Array.from(Array(blocksAmount).keys()));
  return (
    <>
      <div className="blocks">
        <animated.div
          style={{
            transform: o
              .interpolate({
                range: [0, 0.95, 1],
                output: [0, screenWidth / scrollStep, screenWidth / scrollStep + 1],
              })
              .interpolate((x) => `translateX(${-x * counter}px)`),
          }}
          className="blocks__wrapper"
          {...bind}
        >
          {arr.map((e) => {
            return (
              <div
                key={nanoid()}
                className="block"
                style={{
                  minWidth: `${screenWidth / blocksOnScreen}px`,
                  height: `${screenWidth / blocksOnScreen}px`,
                }}
              >
                {e}
              </div>
            );
          })}
        </animated.div>
      </div>
      <button onClick={handleClick} disabled={!canAnimate} className="btn">
        start
      </button>
      <div className="winner">
        your price :{' '}
        <animated.span style={{ opacity, display: canAnimate ? 'block' : 'none' }}>
          {arr[winnerBlock]}
        </animated.span>
      </div>
    </>
  );
}

export default App;
