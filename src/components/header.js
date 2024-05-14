import React from "react"
import { Link } from "gatsby"

import Nav from "components/navigation"
import OffsiteLinks from "components/offsite-links"

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
        <img className="profile" src="https://www.gravatar.com/avatar/10bcecde76c1d8731d63687fd242d290.jpg?s=280" alt="Matt Fannin"></img>

        <div>
          <Link to="/">Matt Fannin</Link>
          <div className="description">Design · Code · Art · Thoughts</div>
        </div>

        <Nav />

        <OffsiteLinks />
      </header>
    )
  }
}

export default Header
