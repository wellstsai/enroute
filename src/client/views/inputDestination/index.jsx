import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import autoCompleteRequest from '../../utils/autocomplete';
import './style.scss';


class InputDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  async handleUpdateInput(input) {
    const suggestions = await autoCompleteRequest(input);
    console.log('suggestions', suggestions)
    this.setState({ dataSource: suggestions });
  }

  render() {
    console.log('state datasource', this.state.dataSource)
    return (
      <div className="input-destination">
        <div className="intro">
          {'Enter a start and end destination, we\'ll show you the gems along the way!'}
        </div>
        <AutoComplete
          id="start"
          hintText="Start Destination"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
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
