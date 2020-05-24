import React, {Component} from 'react'
import BlogCard from '../Common/BlogItem'
import {Link} from 'react-router-dom'
const blogcard =[
    {blogTitle:'How to Create React APP', 
    blogDesc:'Learn how to create react app in ten easy steps', 
    thumb:'img/portfolio/01-thumbnail.jpg', alt:'react-app', 
    authorName:'Sly'},
    {blogTitle:'Adding SEO to youyr React APP', 
    blogDesc:'Learn how to add SEO to your react app in 10 easy steps', 
    thumb:'img/portfolio/06-thumbnail.jpg', alt:'react-app', 
    authorName:'Admin'},
    {blogTitle:'React Context API or Redux', 
    blogDesc:'What are the best ways to store your state? Context API or Redux?', 
    thumb:'img/portfolio/04-thumbnail.jpg', alt:'redux', 
    authorName:'Sly'}
    

]
class Blog extends Component{

    render(){
        return(
            
                <section className="bg-light page-section" id="portfolio">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase" >My Thoughts</h2>
                        <h3 className="section-subheading text-muted">A few things I write about. Still under construction</h3>
                        </div>
                    </div>
                    
                    <div class="card-group card-deck">
                       {blogcard.map((item, index)=>{
                           return <BlogCard {...item} key={index} />
                       }
                       
                       )}
                       <div className="col text-center mt-5">
                           <Link className='btn btn-secondary'>View All</Link>
                          
                       </div>
                        
                    </div>
                    
                    </div>
                      
                    
                </section>
        )
    }

}
export default Blog;