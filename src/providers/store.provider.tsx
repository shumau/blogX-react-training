import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from "../state/store";

const StoreProvider = (props: { children: ReactNode}) => {
    const { children } = props;
    return (
        <Provider store={store}>
            { children }
        </Provider>
    );
}

export default StoreProvider;
