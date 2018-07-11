import React from "react"
import Link from "gatsby-link"

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/" activeClassName="active" exact>About me</Link>
        <Link to="/photography" activeClassName="active" exact>Photography</Link>
        <Link to="/contact" activeClassName="active" exact>Get in touch</Link>
      </nav>
    )
  }
}

export default Nav
