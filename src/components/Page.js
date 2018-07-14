import React from 'react'
import Link from 'gatsby-link'
import { Col } from 'reactstrap';

// const Header = ({ a }) => null;
const Page = ({
    children,
}) => (
    <div className="content_wrap">
        {children}
    </div>
);

export default Page;
