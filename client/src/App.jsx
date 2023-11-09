import './animations.css';
import p5 from 'p5';
import Sketch from './Sketch';

function App() {
  return (
    <>
      <div className='grid justify-center content-center h-40 text-2xl'>
        <div className='flex'>
          <div className='text-center typed'>welcome to safety</div><div className='blinking'>_</div>
        </div>
      </div>
      <Sketch/>
    </>
  )
}

export default App
