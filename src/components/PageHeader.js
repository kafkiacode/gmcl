import React from 'react'
import Link from 'gatsby-link'
import { Col } from 'reactstrap';

// const Header = ({ a }) => null;
const PageHeader = ({
    title,
}) => (
    <div id="page-title" className="page-title">
        <div id="page-title-text" className="page-title-text text-left ">
            <h2>{title}</h2>
        </div>
    </div>
);

export default PageHeader;