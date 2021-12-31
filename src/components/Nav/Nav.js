import { Link } from 'react-router-dom';
import "./Nav.css";
import Logo from "../../images/logo.png";
import { useState } from "react";

export default function Nav() {
    const [isActive, setIsActive] = useState(false)
    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <nav>
            <ul className='nav-list'>
                <div>
                    <Link to="/">
                        <img src={Logo} alt="Logo" id="logo"/>
                    </Link>
                </div>
                <div className={`toggle ${isActive ? "active" : ""}`} onClick={handleToggle}></div>
                <div className={`navbar ${isActive ? "active" : ""}`}>
                    <Link to="/" className='nav-link' onClick={handleToggle}>
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className='nav-link'  onClick={handleToggle}>
                        <li>About</li>
                    </Link>
                    <Link to="/recipes" className='nav-link' onClick={handleToggle}>
                        <li>Recipes</li>
                    </Link>
                    <Link to="/services" className='nav-link' onClick={handleToggle}>
                        <li>Services</li>
                    </Link>
                    <Link to="/contact" className='nav-link' onClick={handleToggle}>
                        <li>Contact</li>
                    </Link>
                    <Link to="/order" className='nav-link' onClick={handleToggle}>
                        <li>Order</li>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}