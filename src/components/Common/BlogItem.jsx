import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class BlogCard extends Component{

    render(){
        return(                 
                        
                    <div className="col-md-4 col-sm-6 mt-4">
                        <div className="card">
                        <Link>
                            <img src={this.props.thumb} className="card-img-top" alt={this.props.alt} />
                        </Link> 
                        <div className="card-body">
                        <Link>
                            <h5 className="card-title">{this.props.blogTitle}</h5>
                        </Link>
                       
                             <p class="card-text">
                                {this.props.blogDesc}     
                            </p>
                        </div>
                        <div className="card-footer">
                            <small class="text-muted">Last updated 3 mins ago </small>
                            <span><small className="text-muted">  By: <Link>{this.props.authorName}</Link></small></span>
                        </div>
                    </div>
                    </div>
                     
          
          
        )
    }

}
export default BlogCard;