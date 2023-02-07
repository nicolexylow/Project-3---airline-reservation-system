import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <NavLink to='/airplanes'>
                Planes
            </NavLink>

            <NavLink to='/flights'>
                Flights
            </NavLink>

            <NavLink to='/admin'>
                Admin
            </NavLink>
        </div>
    )
}

export default NavBar