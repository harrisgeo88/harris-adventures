import Datamap from 'datamaps/dist/datamaps.world.min'
import React from 'react';
import ReactDOM from 'react-dom';
import CountryCounter from './country_counter';
import CountryInfo from './country_info';
import mapData from './map_data';

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
      done: function(datamap) {
        console.log(datamap)
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            console.log(geography)
            // alert(geography.properties.name);
            // <CountryInfo />
        });
      }
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
        <CountryCounter counter={mapData.totalCountries()} />
      </div>
    );
  }
}

DataMap.propTypes = {
    // regionData: React.PropTypes.array.isRequired
};
