import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import AppContainer from "./src/components/AppContainer";

const store = configureStore();


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
export default App;