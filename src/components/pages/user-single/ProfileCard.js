import React, { PureComponent } from 'react';
import StorageService from '../../../services/StorageService';
import Typography from 'material-ui/Typography';

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
            </div>
        )
    }
}

export default ProfileCard;

