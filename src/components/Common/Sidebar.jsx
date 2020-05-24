import React, {Component} from 'react'

class SideBar extends Component {
  render(){
    return(
      <div className="sidebar-wrapper">
        
        <div className="sidebar-content">
          <h2>About Me</h2>
          <p>
          Result-oriented, Agile driven JavaScript Engineer, who is passionate about creating solutions using JavaScript and JavaScript frameworks on both frontends (React JS) and Backend ( NodeJS) Mobile App (React Native)
          </p>
        </div>
        <div className="sidebar-content">
          <h2>Projects I've Worked on</h2>
          <li>Ejoya</li>
        </div>
        <div className="sidebar-content">
          <h2>Contact Me</h2>
          <p>Phone: <small>08032562298</small></p>
          <p>Email: <small>gblessylva@gmail.com</small></p>
          <p>Github: <small>gblessylva</small></p>
          <p>Twitter: <small>mrwondah</small></p>
          <p>Instagram: <small>mrwondah</small></p>
        </div>
        <div className="sidebar-content">
          <h2>Where I've Worked</h2>
        </div>
        

    </div>
    )
    

  }
}
export default SideBar