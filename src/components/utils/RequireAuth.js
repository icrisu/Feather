import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import StorageService from '../../services/StorageService';
import { ROUTES, isPublicRoute } from '../../routes/Routes';
import _ from 'lodash';

export default (WrappedComponent) => {
    class Authentication extends PureComponent {

        render() {
            isPublicRoute(this.props.location.pathname)
            const currentPathName = this.props.location.pathname;
            if (_.isNil(this.props.access_token) && currentPathName !== ROUTES.signin.path && !isPublicRoute(currentPathName)) {
                return <Redirect to={{ pathname: ROUTES.signin.path }} />
            }
            return <WrappedComponent { ...this.props }/>
        }
    }

    const mapStateToProps = ({ access_token }, ownProps) => {
        return { access_token };
    }

    return withRouter(connect(mapStateToProps)(Authentication));
}