import React, {Component} from 'react'
import SideBar from '../../Common/Sidebar'
import '../../assets/css/main.css'
import zenith from "../../../static/zc.PNG"

class ZenithCopy extends Component {
  render(){
    return(
      <div className="project-wrapper">
        
        <div className="project-content">
          <div className="header">
            <img src={zenith} alt="header" style={{width:"100%"}} srcset=""/>
            <h2>ZenithCopy</h2>
            <h4 className='text-muted'>SEO Content Writing Agency</h4>
            <a href="https://zenithcopy.com">lIVE LINK</a>
          </div>
          <div className="">
            <p>ZenithCopy is an Abuja topmost content writing agency run by Chima Maje, a former coleague at DailyPosts.co.uk </p>
            <p>ZenithCopy has worked with top Nigerian Brands like Globat Skills among other top internationa Brands</p>
          </div>
        </div>
        
        <SideBar />

    </div>
    )
    

  }
}
export default ZenithCopy