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
    <div className="profile-detail">
      <img src="http://www.gravatar.com/avatar/10bcecde76c1d8731d63687fd242d290.jpg?s=1000"></img>
      <span>
        <a href="https://github.com/bluefantail" className="github" target="_blank"></a>
        <a href="https://codepen.io/bluefantail/" className="codepen" target="_blank"></a>
        <a href="https://medium.com/@mattfannin" className="medium" target="_blank"></a>
        <a href="https://twitter.com/FanninMatt" className="twitter" target="_blank"></a>
      </span>
      <div className="close-profile"></div>
    </div>
  </div>
);
