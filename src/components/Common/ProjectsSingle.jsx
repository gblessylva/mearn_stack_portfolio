import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ProjectItems extends Component{

    render(){
        return(
            <div className="col-md-4 col-sm-6 portfolio-item">
                        <Link to={this.props.link} className="portfolio-link" >
                            <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                            </div>
                            <img className="img-fluid" src={this.props.img} alt="" />
                        </Link>
                        <div className="portfolio-caption">
                            <Link to={this.props.link}><h4>{this.props.title}</h4></Link>
                            <p className="text-muted">{this.props.subtitle}</p>
                        </div>
                        </div>
         
          
          
        )
    }

}
export default ProjectItems;