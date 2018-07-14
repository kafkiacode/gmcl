import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'reactstrap';

// const Header = ({ a }) => null;
const Project = ({
    pictureSrc,
    title,
    explanation,
}) => (
    <Row className="projects-project">
        <Col md="4">
            <img src={pictureSrc} />
        </Col>
        <Col md="8">
            <h3>{title}</h3>
            <p>
            {explanation}
            </p>
        </Col>
    </Row>
);

export default Project;