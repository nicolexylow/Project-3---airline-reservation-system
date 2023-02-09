import React, {useState} from 'react'
import AirplaneInfo from './AirplaneInfo'

const AirplaneForm = (props) => {
    const [name, setName] = useState('')
    const [rows, setRows] = useState('')
    const [cols, setCols] = useState('')
    const [showInfo, setShowInfo] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        setShowInfo(true)

        props.onSubmit(name, rows, cols)

        
    }

    return (
        <div className='airplane-form'>

            <form onSubmit={handleSubmit}>
                <input placeholder='name' required onChange={(event) => {setName(event.target.value)}} />
                <input type="number" placeholder='rows' required onChange={(event) => {setRows(event.target.value)}} />
                <input type="number" placeholder='cols' required onChange={(event) => {setCols(event.target.value)}}/>

                <button type='button' onClick={props.cancel}>Cancel</button>
                <button>Save</button>
            </form>


            {showInfo ?
                <AirplaneInfo name={name} rows={rows} cols={cols} /> :
                null
            }
        </div>
    )
}

export default AirplaneForm