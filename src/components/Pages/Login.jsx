import React, { Component } from 'react'
// import Fields from '../Common/Fields'
import {withFormik, validateYupSchema} from 'formik'
import * as Yup from 'yup'
import Field from '../Common/Fields'
import {connect} from 'react-redux'
import * as authActions from '../../store/actions/authActions'
const fields =[
    {name: 'email', elementName: 'input', type: 'email', placeholder: 'Admin Email Address'},
    {name: 'password', elementName: 'input', type: 'password', placeholder: 'Admin Password'}
]


 class Login extends Component {
    render() {
        return (
            <div className="admin-login-page">
                <div className="container">
                    <div className="admin-login-form">
                        <div className="login-heading">
                            <h3>Admin Login</h3> 
                        </div>
                        <div className="row">
                            <form action="" className="col-md-12" onSubmit={
                                e=>{e.preventDefault()
                                    this.props.login(this.props.values.email, this.props.values.password)
                                }

                            }>
                                {fields.map((f, i)=>{
                                return(
                                    <div >
                                        <Field 
                                        key={i}
                                        {...f}
                                        value={this.props.values[f.name]}
                                        name={f.name}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur}
                                        touched={this.props.touched[f.name]}
                                        errors={this.props.errors[f.name]}
                                /> 
                             </div> 
                            )
                            })} 
                            <button type="submit"
                            className='btn btn-primary'
                            >Login</button>
                            </form>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

//Using Redux to map Actions
const mapStateToProps = state =>{
    return{
        auth: state.auth
    }
}

//Using Reduce to dispatch actions
const mapDispatchToProps = dispatch =>{
    return {
        login: (email, pass) =>{
            dispatch(authActions.login(email, pass))
        }
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps)(withFormik({
    mapPropsToValues: ()=>({
        email:'', password:''
    }), validationSchema: Yup.object().shape({
        email: Yup.string().email('Please enter a valid email address').required('This email field is required'),
        password: Yup.string().required('This password field is required')
    }), 
    handleSubmit: (values, {setSubmitting}, login)=>{
        console.log('Login attempt', values)
        login(values.email, values.password)
    }
}) (Login))