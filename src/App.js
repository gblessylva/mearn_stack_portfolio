import React from 'react';
import PageWrapper from './components/PageWrapper'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import Blog from './components/Pages/Blog'
import AdminWrapper from './components/AdminWrapper'
import Login from './components/Pages/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <Router>
         <Route
         path='/admin'
         render={props=>(
          <AdminWrapper>
              <Login />
          </AdminWrapper>
         )}
         />
      <PageWrapper>
       
          <Route
           exact={true}
           path="/"
            component={Home}
          />

        <Route
           exact={true}
           path="/about"
            component={About}
          />

          <Route
           exact={true}
           path="/stack"
            component={Services}
          />
          <Route
           exact={true}
           path="/projects"
            component={Projects}
          />
          <Route
           exact={true}
           path="/contact"
            component={Contact}
          />
          <Route
           exact={true}
           path="/blog"
            component={Blog}
          />
      </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
