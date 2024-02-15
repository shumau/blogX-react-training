import { useSelector } from "react-redux";
import {isLoading} from "../state/selectors/app.selectors";
const Spinner = () => {
    const loading = useSelector(isLoading);
    return (
        <>
        </>
    )
}

export default Spinner;
