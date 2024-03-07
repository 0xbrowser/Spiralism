import React from 'react'
import './detect.css'
import axios from 'axios';

const Detect = (props) => {
  const [detectButton, setDetectButton] = React.useState("Submit")
  const [detectedAddr, setDetectedAddr] = React.useState("")

  function handleSubmit() {
    setDetectButton("Detecting")
    axios.get('/api/get-detect/' + detectedAddr)
      .then(response => {
        props.addDetectData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    setDetectButton("Submit")
  }

  const handleAddressChange = event => {
    setDetectedAddr(event.target.value)
  }

  return (
    <>
      <div className='detect-block'>
        <textarea className='address-input-area' placeholder="Address to detect" value={detectedAddr} onChange={handleAddressChange} />
        <div className='detect-button button' onClick={handleSubmit}>
          {detectButton}
        </div>
      </div>
    </>
  )
}

export default Detect