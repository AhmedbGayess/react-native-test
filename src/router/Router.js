import React from "react";
import { Scene, Router } from "react-native-router-flux";
import AppContainer from "../components/AppContainer";
import PostCard from "../components/PostCard";

const RouterComponent = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={AppContainer} title="Home" initial/>
            <Scene key="post" component={PostCard} title="Post"/>
        </Scene>
    </Router>
);

export default RouterComponent; 