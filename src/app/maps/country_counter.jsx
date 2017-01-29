import React from 'react';

export default class CountryCounter extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return <div id="been">
      <img id="compass" src="http://www.newdesignfile.com/postpic/2010/02/compass-outline_229542.png" />
      <p id="country-counter">Been to <strong>{this.props.counter}</strong></p>
    </div>
  }
}

CountryCounter.defaultProps = {
  counter: 1
}

