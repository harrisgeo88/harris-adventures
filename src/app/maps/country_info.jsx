import React from 'react';

export default class CountryInfo extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log('yo')
    return <div></div>
  }
}

CountryInfo.defaultProps = {
  counter: 1
}
