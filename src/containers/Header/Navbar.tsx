import { Link } from "react-router-dom";
import {NavContainer, Navigation} from "../../components/styled/Containers";
import {NavigationButton} from "../../components/styled/Buttons";

export type NavbarProps = {}
const Navbar = (props: NavbarProps) => {
    const toggleNav = () => {}
    return (
        <NavContainer>
            <Navigation>
                <Link onClick={toggleNav} to="/">Home</Link>
                <Link onClick={toggleNav} to="/feed">Feed</Link>
                <Link onClick={toggleNav} to="/login">Login</Link>
            </Navigation>

            <NavigationButton onClick={toggleNav} >
                <span></span>
                <span></span>
            </NavigationButton>
        </NavContainer>
    )
}

export default Navbar;
