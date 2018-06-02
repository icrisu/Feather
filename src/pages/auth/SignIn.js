import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authenticate } from '../../actions';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/common/custom-form-elements/CustomInput';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import LinearProgress from '@material-ui/core/LinearProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ROUTES } from '../../routes/Routes';
import { I18n } from 'react-redux-i18n';


class SignIn extends Component {

    state = {
        rememberMe: false, isLoading: false, email: 'demo.user@demo.co', password: 'somepass'
    }

    _handleChange(event) {
        this.setState({ rememberMe: !this.state.rememberMe })
    }

    _emailChange(email) {
        this.setState({ email });
    }

    _passwordChange(password) {
        this.setState({ password });
    }    

    _login() {
        this.setState({ isLoading: true });
        const { email, password } = this.state;
        this.props.authenticate({ email, password });
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
                            <h3 className="title">{I18n.t('pages.auth.login.title')}</h3>
                            <CustomInput onChange={ this._emailChange.bind(this) } value={ this.state.email } label={I18n.t('pages.auth.login.email')} placeholder={I18n.t('pages.auth.login.emailPlaceholder')} style={{ marginBottom: 20 }} />
                            <CustomInput onChange={ this._passwordChange.bind(this) } value={ this.state.password } label={I18n.t('pages.auth.login.password')} placeholder={I18n.t('pages.auth.login.passwordPlaceholder')} type="password" style={{ marginBottom: 25 }} />
                            <div className="controls">
                                <FormControlLabel style={{ color: 'red' }}
                                    control={
                                        <Checkbox
                                        checked={this.state.rememberMe}
                                        onChange={this._handleChange.bind(this)}
                                        value="checkedB"
                                        color="primary"
                                        />
                                    }
                                    label={I18n.t('pages.auth.login.rememberMe')}
                                />                    
                                <Button onClick={ this._login.bind(this) } variant="raised" color="primary" disabled={ this.state.isLoading }>{I18n.t('pages.auth.login.btn')}</Button>                        
                            </div>
                            <div className="separator"></div>
                            <div style={{ fontSize: 14 }}>{I18n.t('pages.auth.login.haveAccount')} <Link to={ ROUTES.signup.path } style={{ textDecoration: 'none' }}>{I18n.t('pages.auth.login.registerNow')}</Link></div>                    
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}

SignIn.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default connect(null, { authenticate })(SignIn);
