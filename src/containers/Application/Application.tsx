import Notification from "../../components/Notification";
import Spinner from "../../components/Spinner";
import Header from "../Header/Header";
import Router from "../../router/Router";
import { BlockContainer, MainContainer } from "../../components/styled/Containers";


const Application = () => {
    return (
        <BlockContainer>
            <Spinner />
            <Notification />
            <Header />
            <MainContainer>
                <Router />
            </MainContainer>
        </BlockContainer>
    );
}

export default Application;
