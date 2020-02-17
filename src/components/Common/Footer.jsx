import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Footer extends Component {
    render(){
        return(

            <footer className="footer bg-dark">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
        <span className="copyright text-light">Copyright &copy; Your Website {(new Date().getFullYear())}</span>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline quicklinks">
                    <li className="list-inline-item">
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">Terms of Use</Link>
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