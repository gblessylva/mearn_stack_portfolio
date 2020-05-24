import React, {Component} from 'react'
import nodeIcon from '../../static/node-js.png'
import logo from '../../logo.svg';
import mongoIcon from "../../static/mongo.png"
import reactNativeIcon from "../../static/react-native.png"
import SingleService from '../Common/SingleService';


const services =
        [
            {title: 'Node JS', description:'I use Node JS to create server side applications', src: nodeIcon, alt: 'node icon'},
            {title: 'React JS', description:'My major and favorite frontend framework', src : logo, alt: "logo"},
            {title: 'MongoDB', description:'When it comes to servers, I prefer Mongo DB', src : mongoIcon, alt : 'Mongodb Icon'},
            {title: 'React Native', description:'I use React Native to build both IOS and Android applications', src: reactNativeIcon, alt: 'react Native icon'}

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
                        <h2 className="section-heading text-uppercase">My Stack</h2>
                        <h3 className="section-subheading text-muted">Here is my technology stack</h3>
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