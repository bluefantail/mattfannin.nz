import React from "react";
import Helmet from "react-helmet"

import Header from "components/header"
import Nav from "components/navigation"
import OffsiteLinks from "components/offsite-links"

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
    {children}
    <div className="profile-detail">
    <img src="https://www.gravatar.com/avatar/10bcecde76c1d8731d63687fd242d290.jpg?s=1000" alt="Matt Fannin"></img>
    <OffsiteLinks />
    <div className="close-profile"></div>
    </div>
    <Nav />
  </div>
);
