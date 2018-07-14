import React from 'react'
import Link from 'gatsby-link'
import { Col } from 'reactstrap';

// const Header = ({ a }) => null;
const PageBody = ({
    children,
}) => (
    <div id="tab-container" className="site-content">
        {children}
    </div>
);

export default PageBody;