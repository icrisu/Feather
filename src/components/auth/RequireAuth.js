import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

export default (WrappedComponent) => {
    class Authentication extends PureComponent {

        render() {
            // console.log(this.props.access_token)
            // if (_.isNil(this.props.access_token)) {
            //     return <Redirect to={{
            //         pathname: '/signin'
            //     }} />
            // }
            return(
                <div>
                    
                    <WrappedComponent { ...this.props }/>
                </div>
            )
        }
    }

    const mapStateToProps = ({ access_token }, ownProps) => {
        return { access_token };
    }

    return connect(mapStateToProps)(Authentication);
}