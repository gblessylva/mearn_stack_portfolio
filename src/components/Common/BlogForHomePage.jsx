import React, {Component} from 'react'
import BlogCard from '../Common/BlogItem'
import {connect} from 'react-redux'
import * as SiteActions from '../../store/actions/siteActions';

import {withRouter, Link as RouterLink} from 'react-router-dom';

class Blog extends Component{
    componentDidMount(){
        this.props.getPosts(0);
        this.props.getPostCount();
    }
    render(){
        return(
            
                <section className="log-section" id="portfolio">
                    <div className="log-container">
                    <div className="blog-row">
                        <div className="blog-centered-text">
                        <h2  >My Thoughts</h2>
                        <h3 >A few things I write about. Still under construction</h3>
                        </div>
                    </div>
                    
                    <div class="blog-card-group">
                    {this.props.site.posts ?
                            this.props.site.posts.length > 0 ?
                                this.props.site.posts.map((post, i) => {
                                    return (
                                        <BlogCard
                                            post={post}
                                            key={i}
                                        />
                                    )
                                })
                            : <h1> No Post Found </h1>
                            : <h1> No Post Found </h1>
                            }
                       <div className="col text-center mt-5">
                       <div className="text-center">
                                    {this.props.site.postCount > this.props.site.posts.length ?
                                        <button className="btn btn-default" onClick={e => {
                                            this.props.getPosts(this.props.site.posts.length);
                                        }}>Load More</button>
                                    : null}
                                </div>
                          
                       </div>
                        
                    </div>
                    </div>                    
                </section>
        )
    }

}
const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    getPosts: (skip) => {
        dispatch(SiteActions.getPosts(skip));
    },
    getPostCount: () => {
        dispatch(SiteActions.getPostCount());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog));