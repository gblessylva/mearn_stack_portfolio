import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import DashboardWidget from '../../Common/DashboardWidgets'
import * as AdminActions from '../../../store/actions/adminActions';


class Dashboard extends Component {
    componentDidMount(){
        this.props.getPosts(this.props.auth.token);
        console.log(this.props)
    }
    render(){
        return (
            <div className="main-container">
                <DashboardWidget
                    widgetTitle="Total Posts"
                    details={this.props.admin.posts.length}
                />
                <DashboardWidget
                    widgetTitle="Total Users"
                    details={this.props.admin.users.length}
                />

                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: (token) => {
            dispatch(AdminActions.getPosts(token));
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Dashboard));