import React from "react"
import Link from "gatsby-link"

import Nav from "components/navigation"

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="#" className="profile">
          <img src="http://www.gravatar.com/avatar/10bcecde76c1d8731d63687fd242d290.jpg?s=1200"></img>
        </a>

        <div>
          <Link to="/">Matt Fannin</Link>
          <div className="description">Designer, photographer & creative thinker</div>
        </div>
        <Nav />
      </header>
    )
  }
}

export default Header
