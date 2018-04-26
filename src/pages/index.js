import React from "react"
import Helmet from "react-helmet"

import flickrgal from "js/flickrgal.min.js"

import styles from "styles/main.scss"
import flickrgalStyles from "styles/flickrgal.scss"

export default () =>
  <section>
    <Helmet
      title="Matt Fannin | Designer & Photographer"
      meta={[
        { name: "theme-color", content: "#ffffff" }
      ]}
    />
    <h1>Matt Fannin</h1>
    <p>Designer & Photographer</p>

    <div id="flickrgal" data-collections='["mattfannin.nz"]' data-apikey='45e8b763369f3eaf10e31d694e70ccf4' data-userid='66303990@N07'></div>
  </section>
