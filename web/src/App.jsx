import logo from './assets/logo.png'
import './App.css'
import Detect from './components/Detect'

function App() {
  return (
    <>
      <div className='spiralism'>
        <img src={logo} className='logo'></img>
        <div className='head'>
          Spiralism
        </div>
        <div className='text'>
          Clear the risk on chain with me.
        </div>
      </div>
      <Detect></Detect>
    </>
  )
}

export default App
