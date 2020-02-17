import React, {Component} from 'react'
//import Header from '../Common/Header'
import SingleService from '../Common/SingleService';


const services =
        [
            {title: 'Ecommerce', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, esse.', icon : 'fa-shopping-cart'},
            {title: 'Responsive Design', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, esse.', icon : 'fa-laptop'},
            {title: 'Web Security', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, esse.', icon : 'fa-lock'},

        ]
   
class Services extends Component{


   

    render(){
        return(
            <div>
                {/* <Header
                            title="MERN STACK DEVELOPER"
                            subtitle="JavaScript, NodeJS, ReactJS, Mongo, Express, WordPress"
                            buttonText="Let's Talk"
                            link='/contact'
                            showButton={true}
                            image='/img/about/dark.jpg'
                 /> */}
                <section className="page-section" id="services">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        {services.map((service, index)=>{
                                return <SingleService {...service} key={index}/>
                            })
                        }  
                      
                    </div>
                    </div>
                </section>

            </div>
         
          
          
        )
    }

}
export default Services;