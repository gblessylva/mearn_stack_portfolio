import React, {Component} from 'react'
import Header from '../Common/Header';
import Services from './Services'
import Projects from './Projects'
class Home extends Component{

    render(){
        return(
            <div>
                <Header
                  
                  title="Sylvanus m Godbless"
                  subtitle="Result Oriented MEARN Stack Developer"
                  buttonText="Let's Talk"
                  link='/contact'
                  showButton={true}git
                  image='/img/header-bg.jpg'
                />

            
           <Services />
            <Projects />
          
          </div>
        )
    }

}
export default Home;