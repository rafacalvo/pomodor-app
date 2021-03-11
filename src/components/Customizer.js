import React, { createContext, useState } from 'react';

export const breakContext = createContext();
export const workContext = createContext();
export const longBreakContext = createContext();

function Customizer(props) {
  const [breakLength, setBreakLength] = useState(5);
  const [workLength, setWorkLength] = useState(25);
  const [longBreakLength, setLongBreakLength] = useState(15);

  return (
    <div>
      <workContext.Provider value={workLength}>
        <breakContext.Provider value={breakLength}>
          <longBreakContext.Provider value={longBreakLength}>
            {props.children}
          </longBreakContext.Provider>
        </breakContext.Provider>
      </workContext.Provider>
      <div className='my-5 flex flex-col md:flex-row items-center justify-center justify-items-center md:space-x-8 md:space-y-0 space-y-5'>
        <div className='flex flex-col items-center'>
          <p className='mb-2 text-xl'>
            <i class='fas fa-mug-hot'></i> Break: {breakLength}min
          </p>
          <div className='flex flex-row space-x-3'>
            <button
              className='bg-red-500 p-3 rounded-lg'
              onClick={() =>
                setBreakLength((prevLength) =>
                  prevLength === 0 ? 0 : prevLength - 1
                )
              }>
              <svg
                class='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M20 12H4'></path>
              </svg>
            </button>
            <button
              className='bg-blue-500 p-3 rounded-lg'
              onClick={() => setBreakLength(breakLength + 1)}>
              <svg
                class='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
              </svg>
            </button>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <p className='mb-2 text-xl'>
            <i class='fas fa-laptop'></i> Work: {workLength}min
          </p>
          {/* Buttons */}
          <div className='flex flex-row space-x-3'>
            <button
              className='bg-red-500 p-3 rounded-lg'
              onClick={() =>
                setWorkLength((prevLength) =>
                  prevLength === 0 ? 0 : prevLength - 1
                )
              }>
              <svg
                class='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M20 12H4'></path>
              </svg>
            </button>
            <button
              className='bg-blue-500 p-3 rounded-lg'
              onClick={() => setWorkLength(workLength + 1)}>
              <svg
                class='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
              </svg>
            </button>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <p className='mb-2 text-xl'>
            <i class='fas fa-bed'></i> Long Break: {longBreakLength}min
          </p>
          <div className='flex flex-row space-x-3'>
            <button
              className='bg-red-500 p-3 rounded-lg'
              onClick={() =>
                setLongBreakLength((prevLength) =>
                  prevLength === 0 ? 0 : prevLength - 1
                )
              }>
              <svg
                class='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M20 12H4'></path>
              </svg>
            </button>
            <button
              className='bg-blue-500 p-3 rounded-lg'
              onClick={() => setLongBreakLength(longBreakLength + 1)}>
              <svg
                class='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Customizer;
