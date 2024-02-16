import { useSelector } from "react-redux";
import {isLoading} from "../state/selectors/http.selectors";
import { Loading } from "./styled/Elements";
import { LoadingContainer } from "./styled/Containers";

const Spinner = () => {
    const loading = useSelector(isLoading);
    return (
       <>
           {
               loading && (
                   <LoadingContainer>
                       <Loading/>
                   </LoadingContainer>
               )
           }
       </>
    )
}

export default Spinner;
