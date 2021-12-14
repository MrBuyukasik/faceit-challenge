import React from "react";
import { Router, Scene, Stack, Actions } from "react-native-router-flux";
import paths from "./paths";
import withRouter from "./withRouter";
import FeedScreen from "../screens/FeedScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import AuthorDetail from "../screens/AuthorDetailScreen";
import AuthorDetailScreen from "../screens/AuthorDetailScreen";


const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene
                initial
                hideNavBar
                component={withRouter(FeedScreen)}
                key={paths.FEED_SCREEN}
                back={true}
            />
            <Scene
                hideNavBar
                component={withRouter(PostDetailScreen)}
                key={paths.POST_DETAILS_SCREEN}
            />
            <Scene
                hideNavBar
                component={withRouter(AuthorDetailScreen)}
                key={paths.AUTHOR_DETAILS_SCREEN}
            />
        </Stack>
    </Router>
);

export default Routes;
