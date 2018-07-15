import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'reactstrap';

const Project = ({
    pictureSrc,
    title,
    description,
    linkUrl,
    technologies = [],
    role,
    year,
}) => (
    <Row className="projects-project">
        <Col md="4">
            <img src={pictureSrc} />
        </Col>
        <Col md="8">
            <h3>{title}</h3>
            {!!linkUrl &&
                <p className="link">
                    <a href={linkUrl} target="_blank">{
                        linkUrl.replace('https://', '').replace('http://', '')
                    } <i className="fa fa-external-link" /></a>
                </p>
            }
            <p>
            {description}
            </p>
            {!!role && <p><b>Role: </b>{role}</p>}
            {!!year && <p><b>Year: </b>{year}</p>}
            {technologies.length > 0 && <p><b>Technologies:</b></p>}
            {technologies.length > 0 && <ul>
                {technologies.map(t => <li>{t}</li>)}
            </ul>}
        </Col>
    </Row>
);

export default Project;