// src/components/Header.js
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './header.css';


const Header = () => {
    return (
        <header>
          
            <nav className="menu">
                <ul>
                   <li><Button component={Link} to="/" variant="contained" color="primary">Humburger</Button></li>
                   <li><Button component={Link} to="/Kitchen" variant="contained" color="secondary">Kitchen</Button></li>
                   <li><Button component={Link} to="/Fishes" variant="contained" color="success">Fishes</Button></li>
                   <li><Button component={Link} to="/Drinks" variant="contained" color="error">Drinks</Button></li>
                   <li><Button component={Link} to="/Desserts" variant="contained" color="info">Desserts</Button></li>
                   <li><Button component={Link} to="/Salads" variant="contained" color="warning">Salads</Button></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
