import { useSelector } from "react-redux";
import {hasError} from "../state/selectors/http.selectors";
import { AlertContainer } from "./styled/Containers";
import { Alert } from "./styled/Elements";

const Notification = () => {
    const error = useSelector(hasError);

    return (
       <AlertContainer>
            <Alert error={error}>{error ? error?.error : "Данные загружены успешно!"}</Alert>
       </AlertContainer>
    )
}

export default Notification;
