import React from "react";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";
import {BrowserRouter} from "react-router-dom"
import { Router } from "../router";
import { HomePage } from "./components/pages/Home";
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
