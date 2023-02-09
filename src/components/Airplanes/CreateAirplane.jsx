// import React, {useState} from 'react'
// import AirplaneForm from './AirplaneForm'

import React, {Component} from 'react'
import axios from 'axios'
import AirplaneForm from './AirplaneForm'

const AIRPLANE_URL = 'http://localhost:3000/airplanes.json'

export default class CreateAirplane extends Component {
    constructor() {
        super();
        this.state = {
            airplanes: [],
            showForm: false
        }
        this.saveAirplane = this.saveAirplane.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentDidMount() {
        const fetchAirplanes = () => {
            axios.get(AIRPLANE_URL).then((response) => {
                this.setState({airplanes: response.data});
                setTimeout(fetchAirplanes, 4000);
            });
        }
        fetchAirplanes();
    }

    saveAirplane(name, rows, cols) {
        axios.post(AIRPLANE_URL, {name: name, rows: rows, columns: cols}).then((response) => {
            this.setState({ airplanes: [response.data, ...this.state.airplanes]});
        })
        console.log(name)
    }

    handleCancel = () => {
        this.setState({showForm: false})
    }

    handleClick = () => {
        this.setState({showForm: true})
    }
    
    render() {
        return (
            <div>
                <div className='form-click-container'>
                    <h1>
                    Virgin Airlines
                    </h1>

                    <button onClick={this.handleClick} className='create-btn'>
                    Create plane
                    </button>

                </div>
                

                {this.state.showForm ?
                    <AirplaneForm cancel={this.handleCancel} onSubmit={this.saveAirplane} /> :
                    null
                }
                <AirplanesList airplanes={this.state.airplanes} />
            </div>
        )
    }
}

const AirplanesList = (props) => {
    console.log(props.airplanes)
    return (
        <div>
            <p>{ props.airplanes.length} airplanes</p>

            <div className='airplanes-container'>
                <div className='container'>
                    { props.airplanes.map((u) => <div><span key={u.id}>Name: { u.name }</span></div>)}
                </div>

                <div className='container'>
                    { props.airplanes.map((u) => <div><span key={u.id}>Rows: { u.rows }</span></div>)}
                </div>
                
                <div className='container'>
                    { props.airplanes.map((u) => <div><span key={u.id}>Columns: { u.columns }</span></div>)}
                </div>
                
            </div>
            
        </div>
    )
}

// const Airplanes = () => {
//     const [showForm, setShowForm] = useState(false)

//     const handleClick = () => {
//         setShowForm(true)
//     }

//     const handleCancel = () => {
//         setShowForm(false)
//     }

//     return (
//         <div>
//             <h1>
//                 Virgin Airlines
//             </h1>
//             <button onClick={handleClick}>
//                 Create plane
//             </button>

//             {/* shows the create plane form if the button is clicked */}
//             {showForm ?
//                 <AirplaneForm cancel={handleCancel} /> :
//                 null
//             }
//         </div>
//     )
// }

// export default Airplanes