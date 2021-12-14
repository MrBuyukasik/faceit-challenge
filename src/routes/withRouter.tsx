import React, { ComponentType } from "react";
import { Actions } from "react-native-router-flux";
import { Location } from "history";

import { STACK } from "../common/constants/constants";

import store from "../store/storeConfig";
import { pushLocation, popLocation } from "../store/actions/routeActions";

// eslint-disable-next-line
const push = (pathname: string, state: any) => {
    const location: Location = {
        key: "",
        pathname,
        state,
        search: "",
        hash: "",
    };
    Actions.push(pathname, { location });

    if (state?.isPopTo) {
        Actions.popTo(pathname, { location });
    } else if (state?.isReset) {
        STACK.length = 0;
        Actions.reset(pathname, { location });
    }
    store.dispatch(pushLocation(location));
    STACK.push(pathname);
};

const history = {
    push,
    goBack: () => {
        Actions.pop();
        store.dispatch(popLocation());
        STACK.pop();
    },
    replace: Actions.replace,
    entries: STACK,
};

// eslint-disable-next-line
const withRouter = (Component: ComponentType<any>) => (props: any) =>
    <Component history={history} {...props} />;

export default withRouter;
