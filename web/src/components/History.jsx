import React from 'react'
import './history.css'

const History = (props) => {
    const rows = props.detectData

    const [toggle, setToggle] = React.useState('0')
    const [historyKey, setHistoryKey] = React.useState('1')

    function togglePopup() {
        setToggle(toggle == '0' ? '1' : '0');
        console.log(rows)
    }

    // Jump to the specific detection history and show the result details
    function jumpHistory(key) {
        setHistoryKey(key);
        togglePopup();
    }

    return (
        <>
            <div className='history-block'>
                <div className='h3'>History</div>
                <table className='history-table'>
                    <thead>
                        <tr className='row-block'>
                            <th className='no-box'>No.</th>
                            <th className='smt-box'>Address</th>
                            <th className='t-box'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map(item => (
                                <tr key={item.no} className='row-block select' onClick={() => jumpHistory(item.no)}>
                                    <td className='no-box'>{item.no}</td>
                                    <td className='smt-box'>{item.detected_address}</td>
                                    <td className='t-box'>{item.finished_time}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {toggle == '1' ?
                <div className='dark-background'>
                    <div className='popup-block'>
                        <button className='close-button' onClick={() => togglePopup()}>
                            x
                        </button>
                        <div className='row-block'>
                            <div className='column-block left-align'>
                                <div>No.</div>
                                {/* <div>Submitter:</div>
                                <div>Submission Time:</div> */}
                                <div>Detected Address:</div>
                                <div>Finished Time:</div>
                                <div>Time Used:</div>
                                {/* <div>Account Category:</div> */}
                                <br />
                                <br />
                                <div>Model Prediction Result:</div>
                                <br />
                                <div>CatBoost</div>
                                <div>Decision Tree</div>
                                <div>Random Forest</div>
                                <div>XGBoost</div>
                                <div>LightGBM</div>
                                <br />
                                <div>The probability of this address being malicious is</div>
                                {/* <div>Opcode:</div>
                                <div>Extracted Features:</div>
                                <div>Bytecodes:</div> */}
                            </div>
                            <div className='column-block right-align'>
                                <div>{historyKey}</div>
                                <div>{rows[historyKey - 1].detected_address}</div>
                                <div>{rows[historyKey - 1].finished_time}</div>
                                <div>{rows[historyKey - 1].time_used}</div>
                                {/* <div>Contract Account</div> */}
                                {/* <div>Externally Owned Account</div> */}
                                <br />
                                <br />
                                <br />
                                <div>( Malicious ? 1 : 0 )</div>
                                <div>{rows[historyKey - 1].CB}</div>
                                <div>{rows[historyKey - 1].DT}</div>
                                <div>{rows[historyKey - 1].RF}</div>
                                <div>{rows[historyKey - 1].XGB}</div>
                                <div>{rows[historyKey - 1].LGBM}</div>
                                <br />
                                <div>{rows[historyKey - 1].prob}</div>
                            </div>
                        </div>
                    </div>
                </div> : <div />}
        </>
    )
}

export default History