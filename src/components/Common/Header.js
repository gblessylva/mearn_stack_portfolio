import React, {Component} from 'react';
import  '../assets/css/home.css'
class Header extends Component {

    render(){
        return (
            <div className="header-container">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                
            <div className="header">
                <div class="content">
                     <h2>Sylvanus M Godbless</h2>
                <h3>I am </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus alias praesentium enim repudiandae necessitatibus culpa consequatur adipisci? Fugiat aliquid nisi, minus tenetur quia perspiciatis pariatur obcaecati facere reprehenderit amet!</p>
                <button className="header-button">
                    <span className='efx'></span>
                    Work with Me</button>
                </div>
               
            </div>
            <div className="svg-container">
                <img src={this.props.image} alt="icon" srcset="" />
            </div>
        </div>
        )
    }
}

export default Header;