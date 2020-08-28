import React, {Component} from 'react'
import '../assets/css/header-gradient.css'

class GradientHeader extends Component{
    render(){
        return(
            <>
            <div class="block">
		    <span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="img-wrapper">
			<img
				src={this.props.image}
                alt={this.props.title}
            
			/>
		</div>
		<div class="text">
            <p>Hi</p>
        <h1>{this.props.title}</h1>
			<p>
				{this.props.details}
			</p>
            <button className="header-button">
                {this.props.button}
            </button>
		</div>
            
            </>
        
        )
    }
}
export default GradientHeader