import React from "react";
import Greeting from "./components/greeting";
//we need to require the component that we're rendering within this component

React.render(
  <Greeting name="World"/>,
  document.body
);
