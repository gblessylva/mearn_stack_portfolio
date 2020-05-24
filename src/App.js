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
import Ejoya from './components/Pages/projects/ejoya'
import ZenithCopy from './components/Pages/projects/ZenithCopy'
import DailyPosts from './components/Pages/projects/DailyPosts'
import Rentch from './components/Pages/projects/Rentchng'
import Chatta from './components/Pages/projects/Chatta'
import PMP from './components/Pages/projects/PMP.jsx'

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
          <Route
           exact={true}
           path="/projects/ejoya"
            render={
              props=>(
                <PageWrapper>
                  <Ejoya {...props} />
                </PageWrapper>
              )
            }
          />
          <Route
           exact={true}
           path="/projects/zenithcopy"
            render={
              props=>(
                <PageWrapper>
                  <ZenithCopy {...props} />
                </PageWrapper>
              )
            }
          />
          <Route
           exact={true}
           path="/projects/dailyposts"
            render={
              props=>(
                <PageWrapper>
                  <DailyPosts {...props} />
                </PageWrapper>
              )
            }
          />
          <Route
           exact={true}
           path="/projects/rentch"
            render={
              props=>(
                <PageWrapper>
                  <Rentch {...props} />
                </PageWrapper>
              )
            }
          />
          <Route
           exact={true}
           path="/projects/chatta-app"
            render={
              props=>(
                <PageWrapper>
                  <Chatta {...props} />
                </PageWrapper>
              )
            }
          />
        <Route
           exact={true}
           path="/projects/pmp"
            render={
              props=>(
                <PageWrapper>
                  <PMP {...props} />
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
