import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./input.css";

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element);

// root.render(<App/>);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
