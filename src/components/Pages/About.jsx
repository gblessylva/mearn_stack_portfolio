import React, {Component} from 'react'
import Header from '../Common/Header'
class About extends Component{

    render(){
        return(
                <div>   
                    
                <Header
                            title="MERN STACK DEVELOPER"
                            subtitle="JavaScript, NodeJS, ReactJS, Mongo, Express, WordPress"
                            buttonText="Hire Me"
                            link='/contact'
                            showButton={true}
                            image='/img/about/dark.jpg'
                 />
                    <section className="page-section" id="about">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">About Me</h2>
                            <h3 className="section-subheading text-muted">Result-oriented, Agile driven JavaScript Engineer, who is passionate about creating solutions using JavaScript and JavaScript frameworks on both frontends (React JS) and Backend ( NodeJS) Mobile App (React Native)</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                    <h4>2017 - 2019</h4>
                                    <h4 className="subheading">Web Project Developer / Manager : Daily Posts UK</h4>
                                    </div>
                                    <div className="timeline-body">
                                    <p className="text-muted">
                                        I started off as a Web Project Manager and WordPress Developer for DailyPosts UK, then move to Fullstack JavaScript Engineering.
                                        </p>
                                    </div>
                                </div>
                                </li>
                                <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                    <h4>2019</h4>
                                    <h4 className="subheading">Frontend Web Developer Intern</h4>
                                    </div>
                                    <div className="timeline-body">
                                    <p className="text-muted">
                                        As an intern, translate UI/UX design from figma and Invision into a working prototype for the Ejoya music distribution platform
                                    </p>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                    <h4>2019 - Present</h4>
                                    <h4 className="subheading">Software Engineer: Five Star Logistics</h4>
                                    </div>
                                    <div className="timeline-body">
                                    <p className="text-muted">
                                    Make user research, and requirements.
                                    Write documentations.
                                    Analyze documentation in relationship with implementation and breakdown.
                                    Break down analysis into flowcharts
                                    Translate flowcharts into algorithms and logic.
                                    Translate algorithms into codes/programs.
                                    Liaise with UI/UX department to translate programs into usable interface
                                                                        </p>
                                    </div>
                                </div>
                                </li>
                                <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                    <h4>2017-2020</h4>
                                    <h4 className="subheading">Freelance Developer</h4>
                                    </div>
                                    <div className="timeline-body">
                                    <p className="text-muted">
                                     Design and Develop visually appealing websites/ Mobile Applications  for clients with great functionality

                                    </p>
                                    </div>
                                </div>
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                        </div>
                    </section>

            </div>
         
          
          
        )
    }

}
export default About;