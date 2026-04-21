// src/components/Header.js
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <header>
          
            <nav className="menu">
                <ul>
                   <li><Link to="/">Humburger</Link></li>
                   <li><Link to="/Kitchen">Kitchen</Link></li>
                   <li><Link to="/Fishes">Fishes</Link></li>
                   <li><Link to="/Drinks">Drinks</Link></li>
                   <li><Link to="/Desserts">Desserts</Link></li>
                   <li><Link to="/Salads">Salads</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
