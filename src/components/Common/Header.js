import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Header extends Component{

    render(){
        return(
            <div>

            
            <header className="masthead" style={{backgroundImage: 'url("'+ this.props.image+'")'}}>
            <div className="container">
              <div className="intro-text">
                
                <div className="intro-heading">{this.props.title}</div>
                <div className="intro-lead-in">{this.props.subtitle}</div>
                <div className="intro-lead-in">{this.props.phrase}</div>
                {this.props.showButton && <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" 
                  to={this.props.link}>{this.props.buttonText}
                 
                 </Link>
                 
                 }
                 
              </div>
            </div>
          </header>
          
          </div>
        )
    }

}
export default Header;