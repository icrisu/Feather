import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import GenericPage from '../base/GenericPage';
import CustomPaper from '../../common/paper/CustomPaper';
import ProfileCard from './ProfileCard';
import StorageService from '../../../services/StorageService';
import TimelineEvents from '../../common/timeline/TimelineEvents';

class UserProfilePage extends PureComponent {

    constructor(props) {
        super(props);
        const { firstName, lastName, thumb } = StorageService.getUser();
        this.state = {
            user: { firstName, lastName, thumb }
        }  
    }

    render() {
        return(
            <GenericPage title={ `${this.state.user.firstName} ${this.state.user.lastName}` } pageContentClasses="user-single">
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomPaper>
                            <ProfileCard />
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <CustomPaper title="Recent activity">
                            <TimelineEvents />
                        </CustomPaper>
                    </Grid>                                          
                </Grid>
            </GenericPage>
        )
    }
}

export default UserProfilePage;