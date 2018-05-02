import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import StorageService from '../../services/StorageService';
import { ROUTES } from '../../config/routes';
import _ from 'lodash';

export default (WrappedComponent) => {
    class Authentication extends PureComponent {

        render() {

            // console.log(this.props.access_token)
            // const currentPathName = this.props.location.pathname;
            // if (_.isNil(this.props.access_token) && currentPathName !== ROUTES.signin.path) {
            //     // console.log('redirect', this.props)
            //     // this.props.location.pathname === '/admin/signin'
            //     return <Redirect to={{ pathname: ROUTES.signin.path }} />
            // }
            // if (_.isNil(this.props.access_token)) {
            //     return <Redirect to={{
            //         pathname: '/signin'
            //     }} />
            // }
            return <WrappedComponent { ...this.props }/>
        }
    }

    const mapStateToProps = ({ access_token }, ownProps) => {
        return { access_token };
    }

    return connect(mapStateToProps)(Authentication);
}