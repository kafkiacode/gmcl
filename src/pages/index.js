import React from 'react'
import Link from 'gatsby-link'
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';
import PageBody from '../components/PageBody';

const IndexPage = () => (
  <Page>
    <PageHeader title="About" />
    <PageBody>
        <main id="main" className="site-main">
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
                                                Based on: <span>Sydney, AU</span>
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
                                <h4 style={{ textAlign: 'left' }} className="vc_custom_heading vc_custom_1522135929357">
                                    Full stack web developer
                                </h4>
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
                                            I consider my stronger skills to be proactive, solution-driven, fast and eager learner, and with great communication skills.
                                        </p>
                                    </div>
                                </div>
                                <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <p>When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God!</p>
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
                                    <li>
                                        <h3>Photoshop</h3>
                                        <div className="progress">
                                            <div className="percentage" style={{width:'43%'}}>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Dreamviewer</h3>
                                        <div className="progress">
                                            <div className="percentage" style={{width:'97%'}}>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>After Effect</h3>
                                        <div className="progress">
                                            <div className="percentage" style={{width:'54%'}}>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>Illustrator</h3>
                                        <div className="progress">
                                            <div className="percentage" style={{width:'67%'}}>
                                            </div>
                                        </div>
                                    </li>
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
                                    <li>
                                        <h3>Illustrator</h3>
                                        <div className="progress">
                                            <div className="percentage" style={{width:'56%'}}>
                                            </div>
                                        </div>
                                    </li>
                                 
                                    <li>
                                        <h3>Photoshop</h3>
                                        <div className="progress">
                                            <div className="percentage" style={{width:'65%'}}>
                                            </div>
                                        </div>
                                    </li>
                                 
                                    <li>
                                        <h3>Dreamviewer</h3>
                                        <div className="progress">
                                            <div className="percentage" style={{width:'77%'}}>
                                            </div>
                                        </div>
                                    </li>
                                 
                                    <li>
                                        <h3>After Effect</h3>
                                        <div className="progress">
                                            <div className="percentage" style={{width:'43%'}}>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vc_row wpb_row vc_row-fluid services vc_custom_1522307335201">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                            <div className="service col-md-4 col-sm-6 ">
                                <i className="btn-icon fa fa-apple" />
                                <div className="text">
                                    <b>Applications</b>
                                    <p>Duis vitae odio gravida</p>
                                </div>
                            </div>
                            <div className="service col-md-4 col-sm-6 ">
                                <i className="btn-icon fa fa-desktop" />
                                    <div className="text">
                                        <b>Web Design</b>
                                        <p>Mauris eleifend dapibus</p>
                                    </div>
                                </div>
                                <div className="service col-md-4 col-sm-6 ">
                                    <i className="btn-icon fa fa-picture-o" />
                                    <div className="text">
                                        <b>Illustrations</b>
                                        <p>Posuere ac sem nec</p>
                                    </div>
                                </div>
                                <div className="service col-md-4 col-sm-6 ">
                                    <i className="btn-icon fa fa-code" />
                                        <div className="text">
                                            <b>Development</b>
                                            <p>Curabitur euismod sapien</p>
                                        </div>
                                    </div>
                                    <div className="service col-md-4 col-sm-6 ">
                                        <i className="btn-icon fa fa-search" />
                                        <div className="text">
                                            <b>Seo Optimization</b>
                                            <p>Etiam vitae condimentum</p>
                                        </div>
                                    </div>
                                    <div className="service col-md-4 col-sm-6 ">
                                        <i className="btn-icon fa fa-life-ring" />
                                        <div className="text">
                                            <b>Speed Support</b>
                                            <p>Praesent nisl turpis</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                <footer className="entry-meta">
                </footer>
            </article>
        </main>
    </PageBody>
  </Page>
);

export default IndexPage;
