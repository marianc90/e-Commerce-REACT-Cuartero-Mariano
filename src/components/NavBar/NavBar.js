import './NavBar.styles.css';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>
        <header className='header'>
            <div className='header__logoytitulo'>
                <img src={logo} className="App-logo header__logo" alt="logo" />
                <span className='header__titulo'>Tienda React</span>
            </div>
            <nav className='header__menu'>
                <ul>
                    <li>Productos</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavBar