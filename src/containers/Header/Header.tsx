import Navbar from "./Navbar";
import {TitleH1} from '../../components/styled/Typography';
import { Headers } from '../../components/styled/Containers';
import { Avatar } from '../../components/styled/Elements';

const Header = () => {
    return (
        <Headers>
            <Navbar/>
            <TitleH1>BlogX</TitleH1>
            <Avatar />
        </Headers>
    )
}

export default Header;
