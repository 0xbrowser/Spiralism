import React from 'react'
import './history.css'

const History = () => {
    const rows = [
        {
            no: '1',
            submitter: '0x23d45...3a0B',
            time: '2024.2.5 13:26',
        },
        {
            no: '2',
            submitter: '0x23d45...3a0B',
            time: '2024.2.5 13:39',
        },
        {
            no: '3',
            submitter: '0x23d45...3a0B',
            time: '2024.2.5 13:45',
        },
    ]

    return (
        <>
            <div className='history-block'>
                <div className='h3'>History</div>
                <table className='history-table'>
                    <thead>
                        <tr className='row-block'>
                            <th className='no-box'>No.</th>
                            <th className='smt-box'>Submitter</th>
                            <th className='t-box'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map(item => (
                                <tr key={item.no} className='row-block select'>
                                    <td className='no-box'>{item.no}</td>
                                    <td className='smt-box'>{item.submitter}</td>
                                    <td className='t-box'>{item.time}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default History