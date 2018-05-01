import React from "react"
import Link from "gatsby-link"

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <span>
          <Link to="/">Matt Fannin</Link>
          <div className="description">Designer & Photographer</div>
        </span>
        <Link to="/" activeClassName="active" exact>Photography</Link>
        {/*<Link to="/contact" activeClassName="active" exact>Get in touch</Link>*/}
      </nav>
    )
  }
}

export default Nav
