import React, {Component} from 'react';
import {connect} from 'react-redux'

// Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import BlogSnipet from '../Common/BlogForHomePage'
import Team from '../Common/Team';
import HomeHeader from '../Common/Header.js'

import heroImage from '../../static/hero.svg'


class Home extends Component {
    componentDidMount(){
        console.log(this.props, 'all props in home')
    }
    render(){
        return (
            <div>
                <HomeHeader
                  image={heroImage}
                 />
                <BlogSnipet />
               <Services />
               <Portfolio />
               <Timeline />
               <Team />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      admin: state.admin
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
  
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);