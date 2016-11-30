'use strict';

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render(){
    return(
  <h1> HELLO!!!</h1>
);
}
}

const container = document.getElementById("container");

ReactDOM.render(<App/>, container);
