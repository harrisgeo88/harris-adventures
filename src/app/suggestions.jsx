var React = require('react');
var ReactDOM = require('react-dom');
var FormInput = require('../components/form_input');
var BS = require('react-bootstrap');

var Suggestions = React.createClass({
  render() {
    // console.log(yo)
    return <form id="suggestions-form" style={{width:700, margin: 'auto'}}>
      <h2>There are always new places to discover</h2>
      <h2><small>If you have any to recommend let me know</small></h2>
      <FormInput placeholder="country or destination name" type="text"/>
      <FormInput placeholder="any tips/suggestions" type="textarea"/>
      <BS.Button type="submit" bsStyle="primary">Send Suggestion</BS.Button>
    </form>
  }
});

module.exports = Suggestions;
