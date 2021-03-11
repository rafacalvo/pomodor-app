import './App.css';
import logo from './logo.svg';
import Timer from './components/Timer';
import Customizer from './components/Customizer';

function App() {
  return (
    <div className='container text-center flex flex-col justify-center items-center p-5'>
      <h1 className='text-4xl md:text-5xl font-bold m-6'>Your Pomodoro App!</h1>
      <img className='mb-7' src={logo} alt={'Pomodoro logo'} width='120' />
      <p className='text-md mb-2'>
        This timer is based on the{' '}
        <a
          className='text-red-500'
          href='https://en.wikipedia.org/wiki/Pomodoro_Technique'
          target='_blank'
          rel='noopener noreferrer'>
          Pomodoro
        </a>{' '}
        technique. <br /> The app allows you to break down your work into
        intervals (also called sessions).
      </p>
      <p className='text-lg font-semibold'>
        To start using this app hit the play button. <br /> You can hit the{' '}
        <i class='fas fa-plus mx-1'></i> and <i class='fas fa-minus mx-1'></i>{' '}
        buttons to change your times.
      </p>
      <Customizer>
        <Timer />
      </Customizer>
    </div>
  );
}

export default App;
