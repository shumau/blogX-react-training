import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toggleNavBar } from "../../state/actions/app.actions";
import { getToggle } from "../../state/selectors/app.selectors";
import { Navigation} from "../../components/styled/Containers";
import { NavigationButton } from "../../components/styled/Buttons";

const Navbar = () => {
    const isOpen = useSelector(getToggle);
    const toggleNav = () => toggleNavBar()
    return (
        <>
            <NavigationButton onClick={toggleNav} >
                <span className={isOpen ? 'open' : ''}></span>
                <span className={isOpen ? 'open' : ''}></span>
            </NavigationButton>

                <Navigation data-testid = 'navbar' open={isOpen}>
                    <Link onClick={toggleNav} to="/">Home</Link>
                    <Link onClick={toggleNav} to="/feed">Feed</Link>
                    <Link onClick={toggleNav} to="/login">Login</Link>
                </Navigation>
            
        </>
    )
}

export default Navbar;
