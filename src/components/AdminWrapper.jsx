import React, { Component } from 'react'
import '../components/assets/css/admin.css'
export default class AdminWrapper extends Component {
    render() {
        return (
            <div className="admin-page-wrapper">
                {this.props.children }
            </div>
        )
    }
}
