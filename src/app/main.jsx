var React = require('react');
var ReactDOM = require('react-dom');
var SubLabel = require('./sub_label');

var Test = React.createClass({
  render() {
    // console.log(yo)
    return <div>
      <h1>Hey Harris</h1>
      <SubLabel text="sup"/>
    </div>
  }
});

module.exports = Test;
