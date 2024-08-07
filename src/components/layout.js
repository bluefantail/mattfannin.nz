import React from "react";
import Helmet from "react-helmet"

import Header from "components/header"
import Nav from "components/navigation"
import OffsiteLinks from "components/offsite-links"

import appleTouchIcon from "icons/apple-touch-icon.png"
import favicon from "icons/favicon.ico"

import styles from "styles/main.scss"

export default ({ children }) => (
  <div className="container">
    <Helmet
      title="Matt Fannin"
      meta={[
        { name: "theme-color", content: "#ffffff" }
      ]}
    >
      <link rel="icon" href={favicon} sizes="32x32" />
      <link rel="apple-touch-icon" href={appleTouchIcon} />

      <script defer data-domain="mattfannin.nz" src="https://plausible.io/js/script.js"></script>
    </Helmet>
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
