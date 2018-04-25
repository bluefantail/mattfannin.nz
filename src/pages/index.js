import React from "react"
import Helmet from "react-helmet"

import styles from "styles/main.scss"

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
  </section>
