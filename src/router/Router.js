import React from "react";
import { Scene, Router } from "react-native-router-flux";
import PostList from "../components/PostList";
import PostCard from "../components/PostCard";

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Home" component={PostList} title="Home" />
                <Scene key="Post" component={PostCard} title="Post" />    
            </Scene>
        </Router>
    );
}

export default RouterComponent;