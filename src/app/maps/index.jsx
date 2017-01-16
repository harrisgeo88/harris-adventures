import Datamap from 'datamaps/dist/datamaps.world.min'
import React from 'react';
import ReactDOM from 'react-dom';
import mapData from './map-data';

export default class DataMap extends React.Component {
  constructor(props){
    super(props);
    this.datamap = null;
  }

  renderMap(){
    return new Datamap({
      element: ReactDOM.findDOMNode(this),
      projection: 'mercator',
      fills: mapData.fills(), // data categories
      data: mapData.data(), // countries
      geographyConfig: mapData.geographyConfig(), // hover colour
    });
  }
  componentDidMount(){
    const mapContainer = d3.select('#datamap-container');
    mapContainer.style({width: '100%', height:'650px'});
    this.datamap = this.renderMap();
  }

  render() {
    return (
      <div id="datamap-container">
        <div id="been">Been to <strong>{mapData.totalCountries()}</strong> countries</div>
      </div>
    );
  }
}

DataMap.propTypes = {
    // regionData: React.PropTypes.array.isRequired
};
