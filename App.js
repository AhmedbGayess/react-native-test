import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import RouterComponent from "./src/router/Router";
const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}
export default App;