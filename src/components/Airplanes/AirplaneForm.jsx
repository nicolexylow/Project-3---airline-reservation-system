import React, {useState} from 'react'

const AirplaneForm = (props) => {
    const [cancelForm, setCancelForm] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='name' required />
                <input type="number" placeholder='rows' required />
                <input type="number" placeholder='cols' required />

                <button type='button' onClick={props.cancel}>Cancel</button>
                <button>Save</button>
            </form>
        </div>
    )
}

export default AirplaneForm