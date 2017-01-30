import FormInput from '../components/form_input';
import React, {Component} from 'react';
import * as BS from 'react-bootstrap';

export default class extends React.Component {
  render() {
    return <form id="suggestions-form" style={{width:700, margin: 'auto'}}>
      <h2>There are always new places to discover</h2>
      <h2><small>If you have any to recommend let me know</small></h2>
      <FormInput placeholder="country or destination name" type="text"/>
      <FormInput placeholder="any tips/suggestions" type="textarea"/>
      <BS.Button type="submit" bsStyle="primary">Send Suggestion</BS.Button>
    </form>
  }
}
