import React, {Component} from 'react'

class DashboardWidget extends Component{
    render(){
        return(
            <div className="widget-container">
                <h2>{this.props.widgetTitle}</h2>
                <h3>{this.props.details}</h3>
            </div>
        )
    }
}
export default DashboardWidget