import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Stack from './components/Pages/Services';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import Blog from './components/Pages/Blog'
import AdminWrapper from './components/AdminWrapper'
import Login from './components/Pages/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Dashboard from './components/Pages/Dashboard'


class App extends Component {
  render(){

  
  return (
    <div className="App">
      
       <Router>
         
         <Route
         path='/admin'
         render={props=>
          {
            return(
            <AdminWrapper>
              {this.props.auth.token? 
              <Dashboard />
              :
                <Login />
              } 
            </AdminWrapper>
            )
          }
          
          }
         />
       
          <Route
           exact={true}
           path="/"
            render={props =>(
              <PageWrapper>
                  <Home {...props} />
              </PageWrapper>
              )
            
            
            }
          />

        <Route
           exact={true}
           path="/about"
            render ={props =>(
              <PageWrapper>

                <About {...props} />
              </PageWrapper>
            )}
          />

          <Route
           exact={true}
           path="/stack"
           render={
             props=>(
               <PageWrapper>
                 <Stack {...props}/>
               </PageWrapper>
             )
           }
          />
          <Route
           exact={true}
           path="/projects"
           render={
             props=>(
               <PageWrapper>
                 <Projects {...props}/>
               </PageWrapper>
             )
           }

            
          />
          <Route
           exact={true}
           path="/contact"
           render ={
             props=>(
               <PageWrapper>
                 <Contact {...props} />
               </PageWrapper>
             )
           }
          />
          <Route
           exact={true}
           path="/blog"
            render={
              props=>(
                <PageWrapper>
                  <Blog {...props} />
                </PageWrapper>
              )
            }
          />

      </Router>
    </div>
  );
}
}

const mapStateToProps =state=>{
  return{
    auth:state.auth
  } 
}
const mapDispatchToProps = state =>{
  return{

  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
