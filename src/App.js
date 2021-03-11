import './App.css';
import logo from './logo.svg';
import Timer from './components/Timer';
import Customizer from './components/Customizer';

function App() {
  return (
    <div className='container text-center flex flex-col justify-center items-center'>
      <h1 className='text-4xl md:text-6xl font-bold m-6'>Your Pomodoro App!</h1>
      <img className='mb-7' src={logo} alt={'Pomodoro logo'} width='120' />
      <Customizer>
        <Timer />
      </Customizer>
    </div>
  );
}

export default App;
