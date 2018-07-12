import React from "react"
import Link from "gatsby-link"

import Nav from "components/navigation"

class Header extends React.Component {
  componentDidMount() {
    let profile = document.querySelector('.profile');
    let profileDetail = document.querySelector('.profile-detail');
    let closeProfile = document.querySelector('.close-profile');

    profile.addEventListener('click', function() {
      profileDetail.classList.toggle('visible');
    });

    closeProfile.addEventListener('click', function() {
      profileDetail.classList.toggle('visible');
    });
  }
  render() {
    return (
      <header>
        <img className="profile" src="http://www.gravatar.com/avatar/10bcecde76c1d8731d63687fd242d290.jpg?s=280"></img>

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
