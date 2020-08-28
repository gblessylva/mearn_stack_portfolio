import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class PageWrapper extends Component{

    render(){
        return(

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" 
                    style={{background:'rgba(0, 0, 0, 0.6)'}}
                >
                    <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">GBLESSYLVA</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/stack">Stack</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/projects">Projects</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/contact">Get in Touch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/blog">My Thougths</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }

}
export default PageWrapper;