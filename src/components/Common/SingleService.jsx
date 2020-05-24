import React, {Component} from 'react'

class SingleService extends Component{

    render(){
        return(                 
                        
                        <div className="col-md-4">
                            <div className="icons-circle">
                                <img src={this.props.src} alt={this.props.alt}
                                    style={{
                                        width:"100px",
                                        height: "100px"
                                    }}
                                />
                            </div>
                        <h4 className="service-heading">{this.props.title}</h4>
                        <p className="text-muted">
                            {this.props.description}
                         </p>
                        </div>
         
          
          
        )
    }

}
export default SingleService;