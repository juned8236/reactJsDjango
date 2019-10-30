import React    from "react";
import template from "./Relation.jsx";

class Relation extends React.Component {
   home(e) {
    e.preventDefault();
    window.open = 'www.google.com';
}
  render() {
    
    return template.call(this);
  }
}

export default Relation;
