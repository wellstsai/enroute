import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import './style.scss';

class InputDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="input-destination">
        <div className="intro">
          {'Enter a start and end destination, we\'ll show you the gems along the way!'}
        </div>
        <AutoComplete
          id="start"
          hintText="Start Destination"
          dataSource={[1]}
        />
        <AutoComplete
          id="end"
          hintText="End Destination"
          dataSource={[1]}
        />
        <div>
          <RaisedButton
            label="Route Me!"
            backgroundColor="#ff3b3f"
            labelColor="white"
          />
        </div>
      </div>
    );
  }
}

export default InputDestination;
