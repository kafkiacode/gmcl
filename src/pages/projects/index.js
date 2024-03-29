import React from 'react'
import Link from 'gatsby-link'
import PageHeader from '../../components/PageHeader';
import Page from '../../components/Page';
import PageBody from '../../components/PageBody';
import Project from '../../components/Project';

import bookmarcPic from './bookmarc.jpg';
import archivosChilePic from './archivoschile.jpg';
import cineducacionPic from './cineducacion.jpg';
import atomixPic from './atomix-js.png';
import blackTarCityPic from './black-tar-city.png';

const Projects = () => (
    <Page>
        <PageHeader title="Projects" />
        <PageBody>
            <div id="main" className="site-main">
                <article className="page type-page status-publish hentry">
                    <Project
                        title="BlackTarCity"
                        linkUrl="https://gabrielmerida.cl/demos/BlackTarCity/0.1/"
                        description={
                            <span>
                                A procedural city created using ReactJS and ThreeJs.
                        <br />
                                Work in progress - beta version
                        </span>
                        }
                        role="programmer"
                        year="2018"
                        technologies={[
                            'ReactJS',
                            'Three.js',
                            'react-three-fiber',
                            'react-spring',
                            'canvas-sketch-utils',
                            'Storybook',
                        ]}
                        pictureSrc={blackTarCityPic}
                    />
                    <Project
                        title="Atomix-js"
                        linkUrl="https://kafkiacode.github.io/atomix-js"
                        description={
                            <span>
                                Recreation in ReactJS of classic DOS/Commodore game <a href="https://en.wikipedia.org/wiki/Atomix_(video_game)" target="_blank">Atomix</a>
                                <br />
                                Work in progress - beta version
                        </span>
                        }
                        role="Everything except original design."
                        year="2018"
                        technologies={[
                            'ReactJS',
                            'Flow',
                            'Storybook',
                            'redux-saga',
                        ]}
                        pictureSrc={atomixPic}
                    />
                    <Project
                        title="bookmarc.io"
                        linkUrl="https://bookmarc.io"
                        description="Digital library based on Library, BackboneJS and React"
                        role="Full stack developer (architecture, DB modelling, back-end programming, front-end programming, team leader)."
                        year="2014-2017"
                        technologies={[
                            'Laravel 5.1',
                            'BackboneJS',
                            'ReactJS',
                            'AWS',
                            'Elasticsearch'
                        ]}
                        pictureSrc={bookmarcPic}
                    />
                    <Project
                        title="Interactive Map: political executions in Chile, September 1973"
                        linkUrl="http://archivoschile.org/2012/01/mapa-interactivo/"
                        description="Data Driven Journalism project. Interactive map with cases of political victims of 1973 dictatorship."
                        role="Data Editor, UX design, programming"
                        year="2011"
                        technologies={[
                            'Javascript ES5',
                            'Google Maps API',
                        ]}
                        pictureSrc={archivosChilePic}
                    />
                    <Project
                        title="Cineducación (English: film-education)"
                        linkUrl="http://cineducacion.cl"
                        description="Interactive documentary. Integration of Vimeo and YouTube APIs."
                        role="Project Manager, additional front-end and javascript development"
                        year="2013"
                        technologies={[
                            'Javascript ES5',
                            'Google Maps API',
                            'YouTube/Vimeo API'
                        ]}
                        pictureSrc={cineducacionPic}
                    />
                </article>
            </div>
        </PageBody>
    </Page>
);

export default Projects;
