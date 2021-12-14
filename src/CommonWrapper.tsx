import React from "react";
import LoadingContainer from "./components/loading/LoadingContainer";
// import ErrorDialogContainer from "./components/error-modal/ErrorDialogContainer";
const ConditionalWrapper = ({ children }: any) => <>{children}</>;

const CommonWrapper = ({ children }: any) => {
    return (
        <ConditionalWrapper>
            {children}
            <LoadingContainer />
            {/* <ErrorDialogContainer /> */}
        </ConditionalWrapper>
    );
};

export default CommonWrapper;
