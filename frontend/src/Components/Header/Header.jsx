import { Link } from "react-router-dom"
import { FaSignInAlt, FaUser } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to={'/'}>Goal Setter</Link>
            </div>
            <ui>
                <li>
                    <Link to={'/login'}>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to={'/register'}><FaUser />Register</Link>
                </li>
            </ui>
        </header>
    )
}
export default Header;