var React = require('react');
var ReactDOM = require('react-dom');

var FirstComponent = React.createClass({
  render() {
    return <h1>Hey Harris</h1>
  }
});

ReactDOM.render(<FirstComponent/>, document.getElementById('first-component'));
