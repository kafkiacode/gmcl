import React from 'react'
import Link from 'gatsby-link'
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';
import PageBody from '../components/PageBody';

const ContactPage = () => (
  <Page>
    <PageHeader title="Contact" />
    <PageBody>
        <main id="main" className="site-main">
            <article className="page type-page status-publish hentry">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfExOqdraMAtj0R8qNNWGOskbKF13idvcU6nJQczA_EKcZz3Q/viewform?embedded=true"
                    width="100%"
                    height="1020"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    style={{ border: 'none' }}
                >
                    Loading...
                </iframe>
            </article>
        </main>
    </PageBody>
  </Page>
);

export default ContactPage;
