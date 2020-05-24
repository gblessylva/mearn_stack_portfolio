import React, {Component} from 'react'
import SideBar from '../../Common/Sidebar'
import '../../assets/css/main.css'
import rentch1 from "../../../static/rentch.PNG"
import rentch2 from "../../../static/rentch2.PNG"
import rentch3 from "../../../static/rentch3.PNG"
import rentch4 from "../../../static/rentch4.PNG"

class Rentch extends Component {
  render(){
    return(
      <div className="project-wrapper">
        
        <div className="project-content">
          <div className="header">
            <img src={rentch1} alt="header" style={{width:"100%"}} srcset=""/>
            <h2>Rentch.NG</h2>
            <h4 className='text-muted'>Property Finder</h4>
            <a href="https://rentch.ng">lIVE LINK</a>
          </div>
          <div className="">
            <p>Rentch is the proposed AirBnB of Nigeria, where a user can easily find properties in different locations like Abuja, Lagos, Port Harcourt etc </p>
            <p>Rentch is still a work in progress</p>
            <img src={rentch2} alt="header" style={{width:"100%"}} srcset=""/>
            <img src={rentch3} alt="header" style={{width:"100%"}} srcset=""/>
            <img src={rentch4} alt="header" style={{width:"100%"}} srcset=""/>
          </div>
        </div>
        
        <SideBar />

    </div>
    )
    

  }
}
export default Rentch