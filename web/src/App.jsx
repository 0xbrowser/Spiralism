import React from 'react'
import logo from './assets/logo.png'
import './App.css'
import Detect from './components/Detect'
import History from './components/History'

function App() {
  const [detectData, setDetectData] = React.useState([])
  const [count, setCount] = React.useState(1)

  function addDetectData(data) {
    setDetectData(current => [...current,
    {
      no: count,
      CB: data.CB,
      DT: data.DT,
      LGBM: data.LGBM,
      RF: data.RF,
      XGB: data.XGB,
      finished_time: data.finished_time,
      prob: data.prob,
      time_used: data.time_used,
      detected_address: data.detected_address
    }
    ])
    setCount(count + 1)
  }

  return (
    <>
      <div className='screen'>
        <div className='spiralism'>
          {/* <img src={logo} className='logo'></img>
          <div className='h1'>
            Spiralism
          </div>
          <div className='text'>
            Ethereum Malicious Account Detection System
          </div> */}
          <div className='h1'>
            Ethereum Malicious Account Detection System
          </div>
        </div>
        <Detect addDetectData={addDetectData}></Detect>
        <History detectData={detectData}></History>
      </div>
    </>
  )
}

export default App
