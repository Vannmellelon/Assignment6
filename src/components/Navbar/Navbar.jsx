import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./navbar.css";

const Navbar = () => {

    const {user} = useUser();

    return (
        <nav>
            <h1>Sign language translator</h1>
            {user !== null &&
                <div>
                    <p><NavLink to="/translations">Translations</NavLink></p>
                    <p><NavLink to="/profile">Profile</NavLink></p>
                </div>
            }
        </nav>
    )
}
export default Navbar;