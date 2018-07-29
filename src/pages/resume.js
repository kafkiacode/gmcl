import React from 'react'
import Link from 'gatsby-link'
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';
import PageBody from '../components/PageBody';

const ResumePage = () => (
  <Page>
    <PageHeader title="My resume" />
    <PageBody>
        <div id="main" className="site-main">
            <article className="page type-page status-publish hentry">
                <div className="entry-content">

                    <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div className="cms-about-wrap resume-education ">
                                        <div className="rounded-icon">
                                            <i className="btn-icon fa fa-suitcase" />
                                        </div>
                                        <div className="resume-out">
                                            <div className="resume-info">
                                                <h2 className="info-title">Front-end programmer - <a href="https://clueylearning.com" target="_blank">Cluey Learning</a>, Sydney</h2>
                                                <span className="info-date">February 2018 – Present</span>
                                                <ul>
                                                    <li>Introducing ReactJS and related technologies for front-end development</li>
                                                </ul>
                                            </div>
                                            <div className="resume-info">
                                                <h2 className="info-title">Lead full stack developer - <a href="https://bookmarc.io" target="_blank">Bookmarc</a>, Sydney</h2>
                                                <span className="info-date">August 2014 – December 2017</span>
                                                <ul>
                                                    <li>In charge of all technical aspects of development and maintenance of platform <a href="https://bookmarc.io" target="_blank">bookmarc.io</a></li>
                                                    <li>Leads a variable tem of in-house and remote back-end and front-end developers, including managing requirements, assessing results and mentoring.</li>
                                                    <li>Implements a new version of the application built in Laravel 5.1.</li>
                                                    <li>Progressive migration of front-end stack to ReactJS.</li>
                                                    <li>Implementation of back-end ElasticSearch database.</li>
                                                    <li>In charge of system operations in Rackspace and AWS, including managing all the infrastructure in the cloud and related services.</li>
                                                </ul>
                                            </div>
                                            <div className="resume-info">
                                                <h2 className="info-title">Web developer - <a href="http://www.moovmedia.cl" target="_blank">Moovmedia. Santiago, Chile</a></h2>
                                                <span className="info-date">September 2013 – August 2014</span>
                                                <ul>
                                                    <li>Front-end and back-end development and maintenance of code in websites. </li>
                                                    <li>Development of e-commerce projects and Facebook apps.</li>
                                                    <li>Use of Wordpress API, CodeIgniter, BackboneJS and server management.</li>
                                                </ul>
                                            </div>
                                            <div className="resume-info">
                                                <h2 className="info-title">Web developer - <a href="http://www.giga.cl" target="_blank">GIGA. Santiago, Chile</a></h2>
                                                <span className="info-date">April 2013 – September 2013</span>
                                                <ul>
                                                    <li>Website development and Facebook Contest Apps.</li>
                                                </ul>
                                            </div>
                                            <div className="resume-info">
                                                <h2 className="info-title">Professor - <a href="http://www.periodismo.uchile.cl/" target="_blank">School of Journalism, University of Chile</a></h2>
                                                <span className="info-date">July 2009 – September 2012</span>
                                                <ul>
                                                    <li>Professor in Diplomas “Digital Journalism and internet media management”, “Strategic Communication and Leadership in Cultural Projects Management”, “Cultural Journalism and Critics”, “Investigative Journalism”.</li>
                                                    <li>Teacher in workshops “User Experience (UX) Design in web and other digital platforms” and “Website creation using WordPress”</li>
                                                    <li>Professor in courses “Multimedia theory and practice” and “Multimedia Journalism Workshop”. </li>
                                                </ul>
                                            </div>
                                            <div className="resume-info">
                                                <h2 className="info-title">Web Developer – Project Manager - <a href="http://bibliotecas.uchile.cl/" target="_blank">Library Systems - University of Chile</a></h2>
                                                <span className="info-date">March 2008 – September 2010</span>
                                                <ul>
                                                    <li>Part of the development team that renews university main website.</li>
                                                    <li>Project Manager in development of 6 faculty websites, using Oracle WebLogic CMS.</li>
                                                    <li>In charge of diverse innovation and improving processes in web development.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div className="cms-about-wrap resume-education ">
                                        <div className="rounded-icon">
                                            <i className="btn-icon fa fa-graduation-cap" />
                                        </div>
                                        <div className="resume-out">
                                            <div className="resume-info">
                                                <h2 className="info-title">Proficient English</h2>
                                                <span className="info-date">April 2017 - IELTS</span>
                                                <p>Writing: 7.5 | Speaking: 7.5 | Reading: 9 | Listening: 9</p>
                                            </div>
                                            <div className="resume-info">
                                                <h2 className="info-title">Australian Skills Assessment: Developer Programmer</h2>
                                                <span className="info-date">April 2016</span>
                                                <p>Occupation: Developer Programmer (ANZCO CODE 261312)<br />
                                                ICS skills assessment by Australian Computer Society</p>
                                            </div>
                                            <div className="resume-info">
                                                <h2 className="info-title">University of Chile</h2>
                                                <span className="info-date">2007</span>
                                                <p>Diploma in Digital Journalism and Internet Media Management | University of Chile</p>
                                            </div>
                                            <div className="resume-info">
                                                <h2 className="info-title">University of Chile</h2>
                                                <span className="info-date">2007</span>
                                                <p>Journalist, Bachelor Degree in Social Communication</p>
                                            </div>
                                        </div>
                                    </div>
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

export default ResumePage;
