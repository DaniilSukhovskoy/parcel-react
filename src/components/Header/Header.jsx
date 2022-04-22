export default function Header() {
    return (
        <header className="container">
            <div>
                <h1>Daniil Sukhovskoy</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a className="info-link" href="./index.html">Works</a></li>
                    <li><a className="info-link" href="./about.html">About</a></li>
                    <li><a className="info-link" href="https://www.instagram.com/daniil_sukhovskoy/" target="_blank">Instagram</a></li>
                    <li><a className="info-link" href="">Email</a></li>
                </ul>
            </nav>
        </header>
    )
}