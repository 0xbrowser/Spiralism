import logo from './assets/logo.png'
import './App.css'
import Detect from './components/Detect'
import History from './components/History'

function App() {
  return (
    <>
      <div className='screen'>
        <div className='spiralism'>
          <img src={logo} className='logo'></img>
          <div className='h1'>
            Spiralism
          </div>
          <div className='text'>
            Detective on the blockchain
          </div>
        </div>
        <Detect></Detect>
        <History></History>
      </div>
    </>
  )
}

export default App
