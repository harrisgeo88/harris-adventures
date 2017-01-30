import React from 'react';

export default class CountryInfo extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return <div id="navbar">
      <div id="header"><a href="">Harris Adventures</a></div>
      <div id="suggestions"><a href="/suggestions">Suggestions</a></div>
    </div>
  }
}
