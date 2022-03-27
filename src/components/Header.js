import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div className='bg-white p-6 text-slate-600 flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Overflow</h1>
            <nav className='flex gap-6'>
<NavLink to="/">Home</NavLink>
<NavLink to="/About">About</NavLink>
<NavLink to="/Stories">Stories</NavLink>


            </nav>
        </div>
    )
}

export default Header
