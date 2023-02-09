import '../App.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom'
import LogIn from './LogIn';
import Airplanes from './NavBar/Airplanes'
import Flights from './NavBar/Flights';
import Admin from './NavBar/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route exact path='/airplanes' element={<Airplanes />} />
          <Route exact path='/flights' element={<Flights />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
