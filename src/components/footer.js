import React, { Component } from 'react';
import '../style/footer.css'

class Footer extends Component {

  render() {
    var dt = new Date().getYear()+1900;
    return (
      <div className="footer">@ Copyright {dt}</div>
    );
  }

}

export default Footer;
