import React from "react"

import flickrgal from "js/flickrgal.min.js"
import flickrgalStyles from "styles/flickrgal.scss"
import loading from "styles/loading.scss"

class FlickrGal extends React.Component {
  componentDidMount() {
    window.FlickrGal.init();
  }
  render() {
    return <div id="flickrgal" data-collections='["mattfannin.nz"]' data-apikey='45e8b763369f3eaf10e31d694e70ccf4' data-userid='66303990@N07'></div>;
  }
}

export default FlickrGal
