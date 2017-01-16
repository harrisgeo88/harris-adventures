import _ from 'lodash';

export default {
  fills() {
    return {
      defaultFill: "#666",
      lived: "#0019A8",
      loved: "#0225E8",
      liked: "#0984DB",
      neutral: "#7489FC",
      notEnjoyed: "#C0C9FA"
    }
  },

  data() {
    return {
      GRC: { fillKey: "lived" }, // Greece
      GBR: { fillKey: "lived" }, // UK
      FRA: { fillKey: "liked" }, // France
      ITA: { fillKey: "liked" }, // Italy
      POL: { fillKey: "liked" }, // Poland
      CZE: { fillKey: "notEnjoyed" }, // Czech
      DEU: { fillKey: "neutral" }, // Germany
      LUX: { fillKey: "liked" }, // Luxemburgh
      BEL: { fillKey: "neutral" }, // Belgium
      NLD: { fillKey: "loved" }, // Netherlands
      ESP: { fillKey: "liked" }, // Spain
      PRT: { fillKey: "liked" }, // Portugal
      LVA: { fillKey: "liked" }, // Latvia
      LTU: { fillKey: "loved" }, // Lithuania
      EST: { fillKey: "liked" }, // Estonia
      AUT: { fillKey: "liked" }, // Austria
      SWE: { fillKey: "liked" }, // Sweden
      IND: { fillKey: "loved" }, // India
      CHE: { fillKey: "liked" }, // Switzerland
      LIE: { fillKey: "neutrak" }, // Liechtenstein
      HUN: { fillKey: "liked" }, // Hungary
      SVK: { fillKey: "liked" }, // Slovakia
      IRL: { fillKey: "liked" }, // Ireland
      DNK: { fillKey: "liked" }, // Denmark
      UKR: { fillKey: "liked" }, // Ukraine
      SVN: { fillKey: "liked" }, // Slovenia
      HRV: { fillKey: "liked" }, // Croatia
      NOR: { fillKey: "loved" }, // Norway
      TUR: { fillKey: "liked" }, // Turkey
      MLT: { fillKey: "liked" }, // Malta
    }
  },

  geographyConfig() { 
    return {
      highlightFillColor: '#FF0000'
    }
  },

  totalCountries() {
    return _.size(this.data())
    // console.log('ya man', this.geographyConfig())

  }

}
