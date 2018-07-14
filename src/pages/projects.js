import React from 'react'
import Link from 'gatsby-link'
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';
import PageBody from '../components/PageBody';
import Project from '../components/Project';

const Projects = () => (
  <Page>
    <PageHeader title="Projects" />
    <PageBody>
        <main id="main" className="site-main">
            <article className="page type-page status-publish hentry">
                <Project
                    pictureSrc="http://gabrielmerida.cl/wp-content/uploads/2014/12/screenshot_00009-566x500.png"
                    title="Title"
                    explanation="Blah"
                />
            </article>
        </main>
    </PageBody>
  </Page>
);

export default Projects;
