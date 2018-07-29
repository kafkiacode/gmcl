import React from 'react'
import Link from 'gatsby-link'
import { Col, Row } from 'reactstrap';
import profilePic from '../assets/images/profilepicture.jpg';

const Header = () => (
  <Col md="3" className="profile" role="banner">
      <div className="profile-image">
        <Link className="main-logo" to="/">
          <img alt="Gabriel Mérida" src={profilePic} />
        </Link>
      </div>
      <div className="profile-info">
        <div className="name-job">
          <h1>Gabriel Mérida</h1>
          <span className="job">Full-stack developer</span>
        </div>
        <div className="social-icons">
          <a className="linkedin" href="https://cl.linkedin.com/in/gabrielmerida" target="_blank" title="LinkedIn profile"><i aria-hidden className="fa fa-linkedin" /></a>
          <a className="github" href="https://github.com/kafkiacode/" target="_blank" title="GitHub Profile"><i aria-hidden className="fa fa-github" /></a>
        </div>
      </div>
  </Col>
)

export default Header;
