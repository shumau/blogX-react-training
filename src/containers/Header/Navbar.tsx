import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogOut, toggleNavBar } from "../../state/actions/app.actions";
import { getToggle } from "../../state/selectors/app.selectors";
import { Navigation} from "../../components/styled/Containers";
import { NavigationButton } from "../../components/styled/Buttons";
import { getUser } from "../../state/selectors/user.selectors";

const Navbar = () => {
    const isOpen = useSelector(getToggle);
    const user = useSelector(getUser);
    const navigate = useNavigate();

    const toggleNav = () => toggleNavBar();
    const logOut = () => {
        LogOut();
        navigate('/')
        toggleNavBar();
    }

    return (
        <>
            <NavigationButton  onClick={toggleNav} >
                <span className={isOpen ? 'open' : ''}></span>
                <span className={isOpen ? 'open' : ''}></span>
            </NavigationButton>
            <Navigation open={isOpen}>
                <Link onClick={toggleNav} to="/">Home</Link>
                <Link onClick={toggleNav} to="/feed">Feed</Link>
                {
                    Object.keys(user).length ? <button style={{border: "none", background: "transparent", fontSize: 14, cursor: "pointer"}} onClick={logOut}>Logout</button> :  <Link onClick={toggleNav} to="/login">Login</Link>
                }
            </Navigation>
        </>
    )
}

export default Navbar;
