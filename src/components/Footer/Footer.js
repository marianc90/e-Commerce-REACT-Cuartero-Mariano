import "../Footer/Footer.styles.css";
import search from "../../assets/img/search.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
        <br></br>
        <NavLink to='/myorder' className={({ isActive }) => (
                        isActive ? 
                        'nav-active-float' : 
                        'nav-inactive-float')}><img className="" width="50px" src={search}></img>Busque su Orden
        </NavLink>
        <br></br>
        <br></br>
        <div className="leyenda">
        <img src="https://avatars.githubusercontent.com/u/104873709?s=400&u=622c21c74d4d2f59becc2a0cc01c4b7853709f4c&v=4" width="100px"/>
        <br></br>
        <i>Sitio desarrollado como trabajo final para el curso de REACT JS de CODERHOUSE.</i>
        </div>
       
        <div className="footer-bottom">
        <ul className="socials">
            <li>Mariano Ariel Cuartero</li>
            <li><a href="https://github.com/marianc90/"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/mariano-cuartero-393bbb38/"><i className="fa fa-linkedin-square"></i></a></li>
        </ul>
        </div>
        <p>Copyright &copy;2022 <a href="https://github.com/marianc90/">Mariano Ariel Cuartero</a>  </p>

    </div>
    </footer>
  )
}

export default Footer