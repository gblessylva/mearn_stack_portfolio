import React, {Component} from 'react'
import {Link }from 'react-router-dom'
class Clients extends Component {

    render(){
        return(
            <section className="py-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <Link to="#">
                        <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
                    </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <Link to="#">
                        <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
                    </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <Link to="#">
                        <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
                    </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <Link to="#">
                        <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
                    </Link>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
export default Clients