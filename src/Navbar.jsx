export default function Navbar() {
    return <nav className="nav">
        <a href="#/" className="site-title">Adithya's Analytics Portfolio </a>
        <ul>
            <li className="active"> 
                <a href="#/projects">Projects</a>
            </li>
            <li>
                <a href="#/about">About</a>
            </li>
        </ul>
    </nav>
}