import React, {Component} from 'react'
import Header from '../Common/Header'
import {withFormik} from 'formik'
import Fields from '../Common/Fields'


const fields = {
        sections: [
            [
                {name:'name', elementName:'input',  type:'text', id:'name', placeholder: 'Your Name' },
                {name:'email', elementName:'input',  type:'email', id:'name', placeholder: 'Your Email Address' },
                {name:'phone', elementName:'input',  type:'tel', id:'name', placeholder: 'Your Phone Number' }
            ],
            
            [
             {name:'message', elementName:'textarea',  id:'name', placeholder: 'Your Message' }
            ]
        ]
}
   

class Contact extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            email:'',
            phone:'',
            message:''
        }
    }
    submitForm=(e)=>{
        alert('Form Sent')
    }
    render(){
        return(
            <div>
                 <Header
                            title="GOT A PROJECT?"
                            subtitle="Fill in the Form and I'll get back to you within 24 hours"
                            // buttonText="Hire Me"
                            // link='/contact'
                            // showButton={true}
                            image='/img/contact/contact_us.jpg'
                 />
                
                <section className="page-section" id="contact">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" noValidate="noValidate">
                            <div className="row">
                                {fields.sections.map((section, sectionIndex) =>{
                                    console.log('rendering ', sectionIndex, 'with', section )
                                   return(
                                       
                                       <div className="col-md-6">
                                           {section.map((field, i) =>{
                                               return <Fields {...field} 
                                               key={i}
                                                    value={this.state[field.name]}
                                                    onChange={e=>this.setState({[field.name]: e.target.value})}
                                               />
                                              
                                           })}
                                       </div>
                                   ) 
                                })}
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button 
                                    id="sendMessageButton" 
                                    className="btn btn-primary btn-xl text-uppercase" 
                                    type="submit"
                                    onClick={e=>this.submitForm()}
                                    >Send Message</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
          
          </div>
        )
    }

}
export default Contact;