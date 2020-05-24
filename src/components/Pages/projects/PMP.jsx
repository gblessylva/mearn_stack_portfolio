import React, {Component} from 'react'
import SideBar from '../../Common/Sidebar'
import '../../assets/css/main.css'
import pmp from "../../../static/pmp/player.png"
import pmp1 from "../../../static/pmp/albums.png"
import pmp2 from "../../../static/pmp/artists.png"
import pmp3 from "../../../static/pmp/tracks.png"
import pmp4 from "../../../static/pmp/playlist_reorder.png"
class PMP extends Component {
  render(){
    return(
      <div className="project-wrapper">
        
        <div className="project-content">
          <div className="header">
          <img src={pmp} alt="header" style={{width:"100%"}} srcset=""/>
            <h2>PMP (Personalised Music Player)</h2>
            <h4 className='text-muted'>A Next Generation Music Player</h4>
            <a href="#">lIVE LINK</a>
          </div>
          <div className="">
            <p> PMP (Personalised Music Player ) is a next generation music player built with React Native. The application carries alll the features of normal music player but comes with greater customisation.
              Users can edit Track Info, Create Personalised playlist, Stream from multiple premium music platforms, edit the EQ to suit their need among other.
           </p>
            <p>Though still in progress the App was taken down by Google for violating Google policy. APK is available on demand</p>
            <div className="image-view" style={{display:'flex', flexDirection: 'row'}}>
              <div style={{textAlign:'center'}}>
                <img src={pmp1} alt="header" style={{width:"100%", padding:'20px'}} srcset=""/>
                <small style={{textAlign:"center"}}>Album View</small>
              </div>
              <div style={{textAlign:'center'}}>
                 <img src={pmp2} alt="header" style={{width:"100%", padding:'20px'}} srcset=""/>
                <small>Artists</small>
              </div>

             
            </div>
            <div className="image-view" style={{display:'flex', flexDirection: 'row'}}>
              <div style={{textAlign:'center'}}>
              <img src={pmp4} alt="header" style={{width:"100%", padding:'20px'}} srcset=""/>
            <small>Playlist Reorder</small>
              </div>
              <div style={{textAlign:'center'}}>
              <img src={pmp3} alt="header" style={{width:"100%", padding:'20px'}} srcset=""/>
                <small>Tracks</small>
              </div>

             
            </div>

          </div>
        </div>
        
        <SideBar />

    </div>
    )
    

  }
}
export default PMP