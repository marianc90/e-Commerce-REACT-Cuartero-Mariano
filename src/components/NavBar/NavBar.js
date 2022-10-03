import './NavBar.styles.css';
import logo from '../../logo.jpg';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <header className='header'>
            <NavLink to= '/' className='nav-inactive'>
            <div className='header__logoytitulo'>
                <img src={logo} className="App-logo header__logo" alt="logo" />
                <i className="fa-duotone fa-clothes-hanger"></i>
                <span className='header__titulo'>MyStore</span>
            </div>
            </NavLink>
            <nav className='header__menu'>
                <ul>
                    
                    <NavLink to={'/category' + '/Buzos'} className={({ isActive }) => (
                        isActive ? 
                        'nav-active' : 
                        'nav-inactive')}>Buzos
                    </NavLink>
                    <NavLink to={'/category' + '/Remeras'} className={({ isActive }) => (
                        isActive ? 
                        'nav-active' : 
                        'nav-inactive')}>Remeras
                    </NavLink>
                    <NavLink to={'/category' + '/Abrigos'} className={({ isActive }) => (
                        isActive ? 
                        'nav-active' : 
                        'nav-inactive')}>Abrigos
                    </NavLink>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavBar