import React from 'react'
import './detect.css'

const Detect = () => {
  const [detectButton, setDetectButton] = React.useState("Submit")

  function handleSubmit() {
    setDetectButton("Detecting")
  }

  return (
    <>
      <div className='detect-block'>
          <textarea className='address-input-area' placeholder="Address to detect" />
        <div className='detect-button button' onClick={handleSubmit}>
          {detectButton}
        </div>
      </div>
    </>
  )
}

export default Detect