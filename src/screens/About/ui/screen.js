import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class About extends PureComponent {
  render() {
    return (
      <div className="p-5">
        <p className="text-white text-center">
          Nothing to see here.
          <br/>
          <Link to="/" className="text-white"><strong>Go home!</strong></Link>
        </p>
      </div>
    );
  }
}

export default About;