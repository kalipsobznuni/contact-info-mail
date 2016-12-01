'use strict';

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render(){
    return (
  <h1> HELLO!!!</h1>
);
}
}
/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
*/

ReactDOM.render(<App/>, document.getElementById("container"));
