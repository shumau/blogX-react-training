import { useSelector } from "react-redux";
import {hasError} from "../state/selectors/app.selectors";

const Notification = () => {
    const error = useSelector(hasError);
    return (
        <>
        </>
    )
}

export default Notification;
