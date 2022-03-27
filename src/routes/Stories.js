import React from 'react'
import {Outlet} from 'react-router-dom'
function Stories() {
  return (
    <div>
        <h2>
            Stories Untold
        </h2>
        <Outlet />
    </div>
  )
}

export default Stories