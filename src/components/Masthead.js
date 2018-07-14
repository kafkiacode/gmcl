import React from 'react'
import Link from 'gatsby-link'
import { Col } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router';

const pages = {
  about: {
    path: '/',
    title: 'About',
    icon: 'fa-user',
  },
  resume: {
    path: '/resume',
    title: 'Resume',
    icon: 'fa-file-text-o',
  },
  portfolio: {
    path: '/projects',
    title: 'Portfolio',
    icon: 'fa-picture-o',
  },
  contact: {
    path: '/contact',
    title: 'Contact',
    icon: 'fa-map-marker',
  }
};

const Masthead = ({ location = {}, data }) => (
  <header id="masthead" className="site-header">
    <div id="cshero-header" className="cshero-main-header affix-top">
      <div id="cshero-menu-mobile" className="responsive-menu">
        <p className="icon-mobile-menu">Menu</p>
      </div>
      {false && <div className="d_right-menu"><i className="fa fa-bars right-menu" /></div>}
      <div id="cshero-header-navigation" className="picard-navigation">
        <nav id="site-navigation" className="main-navigation">
          <div className="menu-menu-container">
            <ul id="menu-menu" className="nav-menu menu-main-menu">
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
                      <Link to={path}><i className={`fa ${icon}`} /> <span className="menu-title">{title}</span></Link>
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

// export const query = graphql`
//   query Pages {
//     allSitePage {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `;

export default withRouter(Masthead);
// export default Masthead;
