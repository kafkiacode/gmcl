import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/header'
import Masthead from '../components/Masthead'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css'
import './composer.css'
import './static.css'
import './style-2.css'

const Layout = ({ children, data }) => (
  <div id="page_wraper" className="hfeed site">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Container>
      <Row>
        <Header />
        <Col md="9" id="content" className="site-content">
          <Masthead />
          {children()}
          <footer id="colophon" className="site-footer">
              <div className="footer">
                <p className="footer-copyright">gabrielmerida.cl</p>
              </div>
          </footer>
        </Col>
      </Row>
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
