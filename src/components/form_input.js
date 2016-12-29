var React = require('react');

var FormInput = React.createClass({

  getDefaultProps() {
    return {
      style: {display: 'box'},
      text: '',
      placeholder: '',
      label: '',
      className: ''
    }
  },

  render() {
    var {text, label, placeholder, style, className} = this.props
    return <div>
      <label>{label}</label>
      <input type="text" className={className} style={{style}} placeholder={placeholder}/>
    </div>
  }
});

module.exports = FormInput;
