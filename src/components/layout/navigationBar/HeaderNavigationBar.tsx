// Libraries imports
import { NavLink } from 'react-router-dom'

const HeaderNavigationBar = () => {
  return (
    <section className="header-navigation-bar">
      <NavLink to="/">Developer</NavLink>
      <NavLink to="/info">User expirence</NavLink>
      <NavLink to="/userInterface">User interface</NavLink>
    </section>
  )
}

export default HeaderNavigationBar
