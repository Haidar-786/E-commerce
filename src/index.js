import { StrictMode } from "react";
import ReactDOM from "react-dom";
import fontawesome from "./fontawesome";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/store";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  rootElement
);
