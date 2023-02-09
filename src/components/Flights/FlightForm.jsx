import React, {useState} from 'react'
import FlightInfo from './FlightInfo'

const FlightForm = (props) => {
    const [flightNum, setFlightNum] = useState(0)
    const [date, setDate] = useState(new Date())
    const [to, setTo] = useState('')
    const [from, setFrom] = useState('')
    const [plane, setPlane] = useState('')
    const [showInfo, setShowInfo] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('flightNum:', flightNum)
        console.log('Date:', date)
        console.log('To:', to)
        console.log('From:', from)
        console.log('Plane:', plane)
        setShowInfo(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder='flight #' required onChange={(event) => {setFlightNum(event.target.value)}} />
                <input type="date" placeholder='date' required onChange={(event) => {setDate(event.target.value)}} />
                <input placeholder='to' required onChange={(event) => {setTo(event.target.value)}}/>
                <input placeholder='from' required onChange={(event) => {setFrom(event.target.value)}}/>
                <input placeholder='plane' required onChange={(event) => {setPlane(event.target.value)}}/>


                <button type='button' onClick={props.cancel}>Cancel</button>
                <button>Save</button>
            </form>

            {showInfo ?
                <FlightInfo flightNum={flightNum} date={date} to={to} from={from} plane={plane} /> :
                null
            }
        </div>
    )
}

export default FlightForm