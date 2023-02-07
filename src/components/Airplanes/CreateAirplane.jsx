import React, {useState} from 'react'
import AirplaneForm from './AirplaneForm'

const CreateAirplane = () => {
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
                Create Plane
            </button>

            {/* shows the create plane form if the button is clicked */}
            {showForm ?
                <AirplaneForm cancel={handleCancel} /> :
                null
            }
        </div>
    )
}

export default CreateAirplane