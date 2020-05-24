import React, {Component} from 'react'
import SideBar from '../../Common/Sidebar'
import '../../assets/css/main.css'
import chat from "../../../static/chatapp.png"

class Chatta extends Component {
  render(){
    return(
      <div className="project-wrapper">
        
        <div className="project-content">
          <div className="header">
            
            <h2>Chatta</h2>
            <h4 className='text-muted'>A Next Generation Instant Messaging App</h4>
            <a href="#">lIVE LINK</a>
          </div>
          <div className="">
            <p>Chatta (Not real name) is a next generation mobile chat and productivity application built with NDA for a US firm. Details of this project may not be released until app is available. </p>
            <p>I worked as part of the team using Kotlin to develope the app.</p>
            <img src={chat} alt="header" style={{width:"100%"}} srcset=""/>
          </div>
        </div>
        
        <SideBar />

    </div>
    )
    

  }
}
export default Chatta