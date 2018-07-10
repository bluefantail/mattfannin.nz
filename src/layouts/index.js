import React from "react";
import Helmet from "react-helmet"

import Header from "components/header"
import Nav from "components/navigation"

import styles from "styles/main.scss"

export default ({ children }) => (
  <div className="container">
    <Helmet
      title="Matt Fannin | Designer, photographer & creative thinker"
      meta={[
        { name: "theme-color", content: "#ffffff" }
      ]}
    />
    <Header />
    <Nav />
    {children()}
  </div>
);
