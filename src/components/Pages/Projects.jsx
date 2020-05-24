import React, {Component} from 'react'
import ProjectItems from '../Common/ProjectsSingle'
import chatApp from '../../static/chatapp.png'
import ejoya from '../../static/ejoya.co.png'
import rentch from '../../static/rentch.PNG'
import zenith from '../../static/zc.PNG'
import dp from '../../static/dp.PNG'
import pmp from '../../static/pmp/player.png'
const projects =[
    {title: 'Chatta', subtitle:'Android App', img: chatApp, link: '/projects/chatta-app' },
    {title: 'PMP', subtitle:'Android Music Player', img:pmp, link: 'projects/pmp'  },
    {title: 'Zenith Copy', subtitle:'Web Development', img: zenith, link: '/projects/zenithcopy' },
    {title: 'DailyPosts.co.uk', subtitle:'Web Development', img: dp, link: '/projects/dailyposts' },
    {title: 'Ejoya.co', subtitle:'Front End development', img: ejoya, link: '/projects/ejoya'  },
    {title: 'Rentch.ng', subtitle:'Front End Development', img:rentch, link: '/projects/rentch' }
]
class Projects extends Component{

    render(){
        return(
            <div>
                <section className="bg-light page-section" id="portfolio">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Projects</h2>
                        <h3 className="section-subheading text-muted">Here is a couple of projects I have completed</h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            projects.map((item, index)=>{
                                return <ProjectItems {...item} key={index} />

                            })
                        }
                    </div>
                    </div>
                </section>


            </div>
         
          
          
        )
    }

}
export default Projects;