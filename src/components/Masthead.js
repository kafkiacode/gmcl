import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Col } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router';

const pages = {
  about: {
    path: '/',
    title: 'About me',
    icon: 'fa-user',
  },
  resume: {
    path: '/resume',
    title: 'Resume',
    icon: 'fa-file-text-o',
  },
  projects: {
    path: '/projects',
    title: 'Projects',
    icon: 'fa-picture-o',
  },
  contact: {
    path: '/contact',
    title: 'Contact',
    icon: 'fa-map-marker',
  }
};

class Masthead extends Component {
  state = {
    mobileMenuOn: false,
  }
  toggleMenu = () => {
    console.log('toggleMenu', this.state.mobileMenuOn);
    this.setState({ mobileMenuOn: !this.state.mobileMenuOn });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.toggleMenu();
    }
  }
  render() {
    const { location = {}, data } = this.props;
    const { mobileMenuOn } = this.state;
    return (
      <header id="masthead" className="site-header" role="navigation">
        <div id="cshero-header" className="cshero-main-header affix-top">
          <button
            id="cshero-menu-mobile" className="responsive-menu"
            onClick={this.toggleMenu}
          >
            <div className="d_right-menu"><i className="fa fa-bars" /></div>
          </button>
          <div id="cshero-header-navigation" className="picard-navigation">
            <nav id="site-navigation" className="main-navigation">
              <div className="menu-menu-container">
                <ul
                  id="menu-menu"
                  className={classnames(
                    'nav-menu menu-main-menu',
                    mobileMenuOn && 'mobileMenuOn'
                  )}
                >
                  {
                    Object.keys(pages).map((id) => {
                      const { path, title, icon } = pages[id];
                      return (
                        <li
                          key={id}
                          className={classnames(
                            'menu-item menu-item-type-post_type menu-item-object-page menu-item-home no_group',
                            location.pathname == path && 'current_page_item current-menu-item'
                          )}
                          data-depth="0"
                        >
                          <Link to={path} title={title}><i className={`fa ${icon}`} aria-hidden /> <span className="menu-title">{title}</span></Link>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Masthead);
