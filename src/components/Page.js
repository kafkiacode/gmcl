import React from 'react'
import Link from 'gatsby-link'
import { Col } from 'reactstrap';

// const Header = ({ a }) => null;
const Page = ({
    children,
}) => (
    <main className="content_wrap">
        {children}
    </main>
);

export default Page;
