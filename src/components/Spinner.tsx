import { useSelector } from "react-redux";
import {isLoading} from "../state/selectors/app.selectors";
import { BallTriangle } from 'react-loader-spinner';

const Spinner = () => {
    const loading = useSelector(isLoading);
    return (
        loading && <BallTriangle
                        height={150}
                        width={150}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{width: "100vw", height: "100vh", backgroundColor: "white", position: "absolute", left: "0", top: "0", zIndex: "10000000000", display: "flex", alignItems: "center", justifyContent: "center"}}
                        wrapperClass=""
                        visible={true}
                    />
    )
}

export default Spinner;
