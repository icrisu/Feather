import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions';
import CustomInput from '../../components/common/custom-form-elements/CustomInput';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { I18n } from 'react-redux-i18n';

class SignUp extends Component {

    state = {
        isLoading: false, email: '', password: ''
    }

    _emailChange(email) {
        this.setState({ email });
    }

    _passwordChange(password) {
        this.setState({ password });
    }    

    _register() {
        this.setState({ isLoading: true });
        const { email, password } = this.state;
        this.props.registerUser({ email, password });
    }

    _renderProgress() {
        if (this.state.isLoading === true) {
            return <LinearProgress className="loader" />;
        }
    }

    _renderSocial() {
        return(
            <ul className="social-links-list">
                <li><a href="/"><span><i className="fab fa-facebook-f"></i></span></a></li>
                <li><a href="/"><span><i className="fab fa-linkedin-in"></i></span></a></li>
                <li><a href="/"><span><i className="fab fa-google-plus-g"></i></span></a></li>
            </ul>
        )
    }

    _renderLeftContent() {
        return(
            <div className="promo">
                <div className="auth-logo">
                    <img src={process.env.PUBLIC_URL + '/assets/img/main-logo.png'} alt="" />
                </div> 
                { this._renderSocial() }
                <h3 className="promo-text">{I18n.t('pages.auth.terms')}</h3>                
            </div>
        )
    }

    render() {     
        return( 
            <div className="public-page auth-wrapper"> 
                <div className="auth-window">
                    { this._renderLeftContent() }
                    <div className="right-content">
                        <div style={{ height: 2 }}>
                            { this._renderProgress() }
                        </div>
                        <div className="content">
                            <h3 className="title">{I18n.t('pages.auth.register.title')}</h3>
                            <CustomInput onChange={ this._emailChange.bind(this) } label={I18n.t('pages.auth.register.email')} placeholder={I18n.t('pages.auth.register.emailPlaceholder')} style={{ marginBottom: 20 }} />
                            <CustomInput onChange={ this._passwordChange.bind(this) } label={I18n.t('pages.auth.register.password')} placeholder={I18n.t('pages.auth.register.passwordPlaceholder')} type="password" style={{ marginBottom: 25 }} />
                            <Button className="pull-right" onClick={ this._register.bind(this) } variant="raised" color="primary" disabled={ this.state.isLoading }>{I18n.t('pages.auth.register.btn')}</Button>                        
                            <div className="clearfix"></div>
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}

SignUp.propTypes = {
    registerUser: PropTypes.func.isRequired
}

export default connect(null, { registerUser })(SignUp);
