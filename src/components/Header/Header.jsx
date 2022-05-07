import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="container">
            <div>
                <h1>Daniil Sukhovskoy</h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/work">Work</NavLink></li>
                    <li><NavLink to="/personal">Personal</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}