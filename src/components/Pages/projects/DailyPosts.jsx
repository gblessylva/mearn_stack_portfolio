import React, {Component} from 'react'
import SideBar from '../../Common/Sidebar'
import '../../assets/css/main.css'
import dailyPosts from "../../../static/dp.PNG"
import dp1 from "../../../static/dp2.PNG"

class DP extends Component {
  render(){
    return(
      <div className="project-wrapper">
        
        <div className="project-content">
          <div className="header">
            <img src={dailyPosts} alt="header" style={{width:"100%"}} srcset=""/>
            <h2>DailyPosts.co.uk</h2>
            <h4 className='text-muted'>SEO Content Writing Agency</h4>
            <a href="https://office.dailyposts.co.uk/client_signup">lIVE LINK</a>
          </div>
          <div className="">
            <p>DailyPosts.co.uk is a UK based content writing and web/digital marketing agency based in Southapton UK  </p>
            <p>Daily Posts has clients and strong staff base in Nigeria, US, Austrialia, New Zealand etc</p>
            <img src={dp1} alt="header" style={{width:"100%"}} srcset=""/>
          </div>
        </div>
        
        <SideBar />

    </div>
    )
    

  }
}
export default DP