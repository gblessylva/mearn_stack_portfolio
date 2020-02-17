import React, {Component} from 'react'
import Header from '../Common/Header';
import Services from './Services'
import Projects from './Projects'
import Clients from '../Common/Clients'
import Footer from '../Common/Footer'
import BlogSnipet from '../Common/BlogForHomePage'
class Home extends Component{

    render(){
        return(
            <div>
                <Header
                  
                  title="Sylvanus m Godbless"
                  subtitle="Result Oriented MEARN Stack Developer"
                  buttonText="Let's Talk"
                  link='/contact'
                  showButton={true}
                  image='/img/header-bg.jpg'
                />

            
            <Services />
            <Projects />
            <Clients />
            <BlogSnipet />
            <Footer/>
          
          </div>
        )
    }

}
export default Home;