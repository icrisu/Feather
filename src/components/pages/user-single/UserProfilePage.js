import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import GenericPage from '../base/GenericPage';
import CustomPaper from '../../common/paper/CustomPaper';
import ProfileCard from './ProfileCard';
import StorageService from '../../../services/StorageService';
import TimelineEvents from '../../common/timeline/TimelineEvents';
import { retriveUserEvents } from '../../../actions/index';

class UserProfilePage extends PureComponent {

    constructor(props) {
        super(props);
        
        // fake user
        const { firstName, lastName, thumb } = StorageService.getUser();
        this.state = {
            user: { firstName, lastName, thumb, userId: null }
        }  
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            userId: nextProps.match.params._id
        }
    }

    // componentDidMount() {
    //     // retrive usere from API 
    //     // use user ID : this.state.userId
    // }

    render() {
        return(
            <GenericPage title={ `${this.state.user.firstName} ${this.state.user.lastName}` } pageContentClasses="user-single">
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={4}>
                        <CustomPaper>
                            <ProfileCard user={ this.state.user } />
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <CustomPaper title="Recent activity">
                            <TimelineEvents retriveEvents={ retriveUserEvents } />
                        </CustomPaper>
                    </Grid>                                          
                </Grid>
            </GenericPage>
        )
    }
}

export default UserProfilePage;
