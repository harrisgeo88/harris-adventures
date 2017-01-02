var React = require('react');
var BS = require('react-bootstrap');

var FormInput = React.createClass({

  getDefaultProps() {
    return {
      style: {display: 'box'},
      type: 'text',
      placeholder: '',
      label: '',
      className: '',
      br: true
    }
  },

  createElement(type = '', placeholder = '', style = [], className = '', value = '') {
    if (type == 'textarea')
      return <BS.FormControl componentClass="textarea" placeholder={placeholder} className={className} value={value}/>
    else
      return <BS.FormControl placeholder={placeholder} className={className} value={value}/>
  },

  render() {
    var {type, label, placeholder, style, className, br, value} = this.props
    var element = type == 'textarea' ? 'ControlLabel' : 'FormControl'
    var textarea = type == 'textarea' ? 'textarea' : ''

    return <div>
      <label>{label}</label>
      {this.createElement(type, placeholder, style, className, value)}
      {br ? <br/> : ''}
    </div>
  }
});

module.exports = FormInput;
