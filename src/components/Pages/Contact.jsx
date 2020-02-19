import React, {Component} from 'react'
import Header from '../Common/Header'
import {withFormik} from 'formik'
import Fields from '../Common/Fields'
import * as Yup from 'yup'
const phnoeValidate= /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
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
                        <form id="contactForm" name="sentMessage" noValidate="noValidate" 
                            onSubmit={this.props.handleSubmit}>
                            <div className="row">
                                {fields.sections.map((section, sectionIndex) =>{
                                    // console.log('rendering ', sectionIndex, 'with', section )
                                   return(
                                       
                                       <div className="col-md-6">
                                           {section.map((field, i) =>{
                                               return <Fields {...field} 
                                               key={i}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange ={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={this.props.touched[field.name]}
                                                errors={this.props.errors[field.name]}
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
export default withFormik({
    mapPropsToValues :()=>({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    // validate: values =>{
    //     const errors= {};
    //     Object.keys(values).map(v =>{
    //         if(!values[v]){
    //             errors[v]='Required Field'
    //         }
    //     })
    //     return errors

    // },

    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Name must be Longer than three').required('Name cannot be empty'),
        email: Yup.string().email('Email is not valid').required('Email cannot be empty'),
        phone: Yup.string('Phone number must be numbers only')
            .matches(phnoeValidate, 'Phone number must be digits')
            .required('Phone number cannot be empty')
            .min(10, 'Number not complete')
            .max(15, 'Number is too long'),
            
        message: Yup.string()
        .required('Message Cannot be empty')
        .min(5, 'Your message should be long enough')
        .max(100000, 'Your message is to long, send an email to gblessylva@gmail.com')
    }),

    handleSubmit: (values, {setSubmit}) =>{
        console.log('Values', JSON.stringify(values))
        alert("you've submitted the form, here is what you filled", JSON.stringify(values))
    }
})(Contact);