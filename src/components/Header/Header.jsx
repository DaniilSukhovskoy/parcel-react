import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="container">
            <div>
                <h1>Daniil Sukhovskoy</h1>
            </div>
            <nav>
                <ul className="nav-Navlinks">
                    <li><NavLink className="info-Navlink" to="/work">Work</NavLink></li>
                    <li><NavLink className="info-Navlink" to="/personal">Personal</NavLink></li>
                    <li><NavLink className="info-Navlink" to="/about">About</NavLink></li>
                    <li><NavLink className="info-Navlink" to="https://www.instagram.com/daniil_sukhovskoy/" target="_blank">Instagram</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}