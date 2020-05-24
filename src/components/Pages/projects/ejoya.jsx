import React, {Component} from 'react'
import SideBar from '../../Common/Sidebar'
import '../../assets/css/main.css'
import ejo from "../../../static/ejoya.co.png"

class ejoya extends Component {
  render(){
    return(
      <div className="project-wrapper">
        
        <div className="project-content">
          <div className="header">
            <img src={ejo} alt="header" style={{width:"100%"}} srcset=""/>
            <h2>Ejoya.co</h2>
            <h4 className='text-muted'>A music Distrubution App</h4>
            <a href="https://ejoya.co">lIVE LINK</a>
          </div>
          <div className="">
            <p>Ejoya.co is a music distribution Platform. The platform seeks to distribute music especially of upcoming artists to platforms like Apple, Google Music, Spotify, </p>
            <p>Ejoya has distributed musics for Buchi, Burna Boy, Zlatan, and Onyeka Owenu amongst others</p>
          </div>
        </div>
        
        <SideBar />

    </div>
    )
    

  }
}
export default ejoya