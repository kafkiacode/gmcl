import React from 'react'
import Link from 'gatsby-link'
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';
import PageBody from '../components/PageBody';
import Skillbar from '../components/Skillbar';

const IndexPage = () => (
  <Page>
    <PageHeader title="About" />
    <PageBody>
        <div id="main" className="site-main">
            <article className="page type-page status-publish hentry">
                <div className="entry-content">
                    <div className="vc_row wpb_row vc_row-fluid vc_custom_1522307314558 vc_row-has-fill">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div className="cms-about-wrap info-about">
                                        <ul className="info-list">
                                            <li>
                                                Name: <span>Gabriel Mérida</span>
                                            </li>
                                            <li>
                                                Based on: <span>Melbourne, AU</span>
                                            </li>
                                            <li>
                                                Email: <span><a href="mailto:contacto@gabrielmerida.cl">contacto@gabrielmerida.cl</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid vc_custom_1522307320266">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <h3 style={{ textAlign: 'left' }} className="vc_custom_heading vc_custom_1522135929357">
                                    Full stack web developer
                                </h3>
                                <div className="wpb_text_column wpb_content_element  vc_custom_1522136306311">
                                    <div className="wpb_wrapper">
                                        <p>
                                            Experienced in PHP, Javascript ES2015, front-end development and frameworks like Laravel and ReactJS.
                                        </p>
                                        <p>
                                            I have developed websites for over 10 years, from corporate websites to data visualization mash-ups.
                                        </p>
                                        <p>
                                            With a background in UX design, Information Architecture and Web Project Management.
                                        </p>
                                        <p>
                                            I consider my stronger skills to be proactive, solution-driven, fast and eager learner.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="vc_row wpb_row vc_row-fluid gray-bg vc_custom_1522307330161">
                    <div className="wpb_column vc_column_container vc_col-sm-6">
                        <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                                <div className="cms-skill-wrap my-skill">
                                <ul className="list-skill">
                                    <Skillbar title="ReactJS" percentage={85} />
                                    <Skillbar title="ES2015" percentage="80" />
                                    <Skillbar title="Flow" percentage="75" />
                                    <Skillbar title="GraphQL / Apollo" percentage="65" />
                                </ul>                             
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-6">
                    <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                            <div className="cms-skill-wrap my-skill">
                                <ul className="list-skill">
                                    <Skillbar title="PHP OOP 5.6 > 7.x" percentage="75" />
                                    <Skillbar title="Laravel 5.x" percentage="85" />
                                    <Skillbar title="WordPress" percentage="90" />
                                    <Skillbar title="AWS" percentage="35" />
                                    <Skillbar title="Elasticsearch" percentage="30" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </article>
        </div>
    </PageBody>
  </Page>
);

export default IndexPage;
