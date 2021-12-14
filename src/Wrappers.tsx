import React from "react";
import { Provider } from "react-redux";
import CommonWrapper from "./CommonWrapper";
import store from "./store/storeConfig";

const Wrappers = ({ children }: any) => {
    return (
        <Provider store={store}>
            {/* <ErrorBoundary> */}
            <CommonWrapper>{children}</CommonWrapper>

            {/* </ErrorBoundary> */}
        </Provider>
    );
};

export default Wrappers;
