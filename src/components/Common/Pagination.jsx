import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Pagination extends Component{
    render(){
        return(
            <nav >
                <ul className="pagination justify-content-center mt-5">
                    <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active">
                        <Link className="page-link" to="#">1</Link>
                    </li>
                    <li className="page-item ">
                    <span className="page-link">
                        2
                        {/* <span className="sr-only">(current)</span> */}
                    </span>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#">3</Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#">Next</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Pagination