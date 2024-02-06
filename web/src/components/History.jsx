import React from 'react'
import './history.css'

const History = () => {
    const rows = [
        {
            no: '0x0001',
            submitter: '0x23d45...3a0B',
            time: '2024.2.5 13:26',
        },
        {
            no: '0x0002',
            submitter: '0x23d45...3a0B',
            time: '2024.2.5 13:39',
        },
        {
            no: '0x0003',
            submitter: '0x23d45...3a0B',
            time: '2024.2.5 13:45',
        },
    ]

    const [toggle, setToggle] = React.useState('0')
    const [historyKey, setHistoryKey] = React.useState('1')

    function togglePopup() {
        setToggle(toggle == '0' ? '1' : '0');
        console.log(toggle);
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
                            <th className='smt-box'>Submitter</th>
                            <th className='t-box'>Submission Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map(item => (
                                <tr key={item.no} className='row-block select' onClick={() => jumpHistory(item.no)}>
                                    <td className='no-box'>{item.no}</td>
                                    <td className='smt-box'>{item.submitter}</td>
                                    <td className='t-box'>{item.time}</td>
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
                                <div>Submitter:</div>
                                <div>Submission Time:</div>
                                <div>Detected Address:</div>
                                <div>Account Category:</div>
                                <div>Model Prediction Result:</div>
                                <br />
                                <div>Opcode:</div>
                                <div>Extracted Features:</div>
                                <div>Bytecodes:</div>
                            </div>
                            <div className='column-block right-align'>
                                <div>{historyKey}</div>
                                {/* <div>{rows[historyKey - 1].submitter}</div> */}
                                <div>0x23d45c6Eee761B141474068df8A9Ea069A223a0B</div>
                                <div>{rows[historyKey - 1].time}</div>
                                <div>0x001a589dda0d6be37632925eaf1256986b2c6ad0</div>
                                {/* <div>Contract Account</div> */}
                                <div>Externally Owned Account</div>
                                <div>Risky</div>
                                <br />
                                <div>117</div>
                                <div>144</div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <div />}
        </>
    )
}

export default History