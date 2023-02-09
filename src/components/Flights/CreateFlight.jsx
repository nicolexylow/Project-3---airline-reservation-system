import React, {useState} from 'react'
import FlightForm from './FlightForm'

const CreateFlight = () => {
    const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
        setShowForm(true)
    }

    const handleCancel = () => {
        setShowForm(false)
    }

    return (
        <div>
            <h1>
                Virgin Airlines
            </h1>
            <button onClick={handleClick}>
                Create Flight
            </button>

            {/* shows the create plane form if the button is clicked */}
            {showForm ?
                <FlightForm cancel={handleCancel} /> :
                null
            }
        </div>
    )
}

export default CreateFlight