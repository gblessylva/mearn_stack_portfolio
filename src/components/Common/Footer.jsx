import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Footer extends Component {
    render(){
        return(

            <footer className="footer bg-dark">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
        <span className="copyright text-light">Copyright &copy; Gblessylva {(new Date().getFullYear())}</span>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="https://twitter.com/mrwondah">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/gblessylva">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/gblessylva/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline quicklinks">
                    <li className="list-inline-item">
                      <Link >Privacy Policy</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link >Terms of Use</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        
        )
    }
}
export default Footer