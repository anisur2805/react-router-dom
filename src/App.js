/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppSpecificContext from "./components/AppSpecificContext";
import Main from "./components/Main";
import ProvideAuth from "./components/ProvideAuth";
import RouteMatchers from "./components/RouteMatchers";
import Sidebar from "./components/Sidebar"; 

function App() {
    return (
        <div className="App">
            <h1>Hello From React Router DOM</h1>
            <Main />

            {/* <ProvideAuth /> */}

            {/* <Sidebar /> */}

            {/* <BrowserRouter>
                <RouteMatchers />
            </BrowserRouter> */}
            
            {/* <AppSpecificContext />  */}
        </div>
    );
}

export default App;
