import React from "react";
import { Button } from "@mui/material";

import logo from "./logo.svg";
import "./App.css";

export function MyButton() {
  return <Button variant="contained">Hello World</Button>;
}

function App() {
  return <MyButton />;
}

export default App;
