import React, {Component} from 'react';
import API from '../../utils/api';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';

class BlogItem extends Component {
    render(){
        return (
            <div className="blog-card">
                <Link 
                    className="blog-image-link" 
                    to={`/blog/${this.props.post.slug}`}
                    onClick={e => this.props.setPostData(this.props.post)}
                    >
                    
                    {this.props.post.PostImage ?
                        this.props.post.PostImage.length > 0 ?
                        <img  src={API.makeFileURL(this.props.post.PostImage[0].thumbnail, null)} alt="" />
                
                        : null
                    : null}
                </Link>
                <div className="blog-card-content">
                   <Link 
                   to={`/blog/${this.props.post.slug}`}
                   onClick={e => this.props.setPostData(this.props.post)}
                   >
                        <h4>{this.props.post.title}</h4>
                   </Link> 
                    <p >{this.props.post.slug}</p>
                    <div className='content-toggle'>
                        <p>Hidden contents goes here</p>
                        <button>Click me to read more</button>
                    </div>
                </div>
            </div>
        )
    }
}



export default BlogItem;