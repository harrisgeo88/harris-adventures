var React = require('react');

var SubLabel = React.createClass({

  render() {
    return <div>
      <h2>{this.props.text}</h2>
    </div>
  }
});

module.exports = SubLabel;
