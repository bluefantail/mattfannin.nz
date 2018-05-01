import React from "react";
import Helmet from "react-helmet"

import Nav from "components/navigation"

import styles from "styles/main.scss"

export default ({ children }) => (
  <div className="container">
    <Helmet
      title="Matt Fannin | Designer & Photographer"
      meta={[
        { name: "theme-color", content: "#ffffff" }
      ]}
    />
    <Nav />
    {children()}
  </div>
);
