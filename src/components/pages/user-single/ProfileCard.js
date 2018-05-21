import React, { PureComponent } from 'react';
import StorageService from '../../../services/StorageService';
import Typography from '@material-ui/core/Typography';
import ReactStars from 'react-stars'

class ProfileCard extends PureComponent {

    constructor(props) {
        super(props);
        const { firstName, lastName, thumb } = StorageService.getUser();
        this.state = {
            user: { firstName, lastName, thumb }
        }          
    }
    render() {
        return(
            <div className="profile-card">
                <div className="unser-info">
                    <div className="user-avatar">
                        <img src={ this.state.user.thumb } alt="" />
                    </div>
                    <Typography className="user-name" variant="title" gutterBottom>{ `${this.state.user.firstName} ${this.state.user.lastName}` }</Typography>                
                    <div className="position">Product Manager @ThecInc</div>
                </div>
                <div className="rating-social">
                    <ReactStars count={ 5 } size={ 26 } value={ 3.5 } color1="#cfd8dc" edit={ false } />
                    <div className="vertical-separator"></div>
                    <span className="likes"><i className="far fa-thumbs-up"></i> 525</span>
                </div>
                <div className="custom-divider divider"></div>
                
                <div className="contact-block">
                    <div className="label">Email address</div>
                    <div className="contact-value">kara.trace@techinc.co</div>
                </div>
                <div className="contact-block">
                    <div className="label">Phone number</div>
                    <div className="contact-value">(541) 754-3010</div>
                </div>
                <div className="contact-block">
                    <div className="label">Address</div>
                    <div className="contact-value">24th Street, San Francisco, <br />90145 California, US</div>
                </div>                                        
                
                <div className="custom-divider divider"></div>

                <div className="contact-block">
                    <div className="label">Facebook</div>
                    <div className="contact-value">facebook.com/kara-trace</div>
                </div>                
            </div>
        )
    }
}

export default ProfileCard;

