import React from "react"
import Link from "gatsby-link"

import Nav from "components/navigation"

class Header extends React.Component {
  componentDidMount() {
    let profile = document.querySelector('.profile');
    let profileDetail = document.querySelector('.profile-detail');
    let closeProfile = document.querySelector('.close-profile');

    function toggleProfileDetail() {
      profileDetail.classList.toggle('visible');
    }

    profile.addEventListener('click', toggleProfileDetail);
    closeProfile.addEventListener('click', toggleProfileDetail);

    window.addEventListener('keydown', event => {
      if (profileDetail.classList.contains('visible')) {
        if (event.key === 'Escape' || event.keyCode === 27) toggleProfileDetail();
      }
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
