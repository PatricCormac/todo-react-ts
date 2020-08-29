import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/todo-react-ts" className="brand-logo">TypeScript</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/todo-react-ts">Список дел</NavLink></li>
          <li><NavLink to="/about">Информация</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
