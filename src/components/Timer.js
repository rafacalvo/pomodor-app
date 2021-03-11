/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Duration from 'luxon/src/duration.js';
import { longBreakContext, breakContext, workContext } from './Customizer.js';

import endAudio from '../audio/alert_high-intensity.wav';
import startedAudio from '../audio/hero_decorative-celebration-01.wav';

function Timer() {
  const [timerLength, setTimerLength] = useState(1500);
  const [timerOn, setTimerOn] = useState(false);
  const [timerDone, setTimerDone] = useState(true);

  const [sessionType, setSessionType] = useState('Work');
  const [sessionNumber, setSessionNumber] = useState(0);

  const longBreakLength = useContext(longBreakContext);
  const breakLength = useContext(breakContext);
  const workLength = useContext(workContext);

  const startedSound = new Audio(startedAudio);
  const endSound = new Audio(endAudio);

  const minuteMultiplier = 60;
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn) {
        setTimerLength((timerLength) => timerLength - 1);
      }
    }, 1000);
    if (timerOn) {
      setTimerDone(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  useEffect(() => {
    if (timerLength === 0) {
      setTimerOn(false);
      setTimerDone(true);
      setSessionType((prevType) => {
        if (prevType === 'Work') return 'Break';
        if (prevType === 'Break') return 'Work';
        if (prevType === 'Long Break') return 'Work';
      });
    }
  }, [timerLength]);

  useEffect(() => {
    if (sessionType === 'Work') {
      setTimerLength(workLength * minuteMultiplier);
    }
  }, [sessionType, workLength]);
  useEffect(() => {
    if (sessionType === 'Break') {
      setTimerLength(breakLength * minuteMultiplier);
    }
  }, [breakLength, sessionType]);

  useEffect(() => {
    if (sessionType === 'Long Break') {
      setTimerLength(longBreakLength * minuteMultiplier);
    }
  }, [longBreakLength, sessionType]);

  useEffect(() => {
    if (sessionType === 'Work' && timerDone) {
      setSessionNumber((prevNumber) => prevNumber + 1);
    }
    if (timerDone) {
      endSound.play();
    }
    // eslint-disable-next-line
  }, [sessionType, timerDone]);

  useEffect(() => {
    if (sessionNumber > 4) {
      setSessionType('Long Break');
      setSessionNumber(0);
    }
  }, [sessionNumber]);
  return (
    <div className='name'>
      <h3 className='text-6xl mt-3 font-semibold'>
        {Duration.fromObject({ seconds: timerLength }).toFormat('mm:ss')}
      </h3>
      <button
        className='bg-green-500 my-4 px-7 py-2 rounded-lg'
        onClick={() => {
          setTimerOn(!timerOn);
          startedSound.play();
        }}>
        {timerOn ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='42'
            height='42'
            fill='currentColor'
            className='bi bi-pause-btn'
            viewBox='0 0 16 16'>
            <path d='M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z' />
            <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='42'
            height='42'
            fill='currentColor'
            className='bi bi-play-btn'
            viewBox='0 0 16 16'>
            <path d='M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z' />
            <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z' />
          </svg>
        )}
      </button>
      <div>
        {sessionType === 'Break' && <i className='fas fa-mug-hot text-2xl'></i>}
        {sessionType === 'Work' && <i className='fas fa-laptop text-2xl'></i>}
        {sessionType === 'Long Break' && (
          <i className='fas fa-bed text-2xl'></i>
        )}
      </div>
      <p className='text-xl mb-7'>Session Number: {sessionNumber}</p>
    </div>
  );
}

export default Timer;
