import React    from "react";
import template from "./Redux1.jsx";
import {connect} from 'react-redux'

class Redux1 extends React.Component {

  render() {
    return template.call(this);

  }
}

const mapStateToProps = (state) => {
    return {
      data: state.actionreducer.photos
    }
  }
export default connect(mapStateToProps)(Redux1);
