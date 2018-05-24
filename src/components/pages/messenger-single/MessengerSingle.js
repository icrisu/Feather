import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chatSearch, getChatRooms } from '../../../actions';
import PropTypes from 'prop-types';
import GenericPage from '../base/GenericPage';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CustomPaper from '../../common/paper/CustomPaper';
import { I18n } from 'react-redux-i18n';
// import { ROUTES } from '../../../routes/Routes';

class MessengerSingle extends Component {


    render() {
        return(
            <GenericPage title={I18n.t('pages.messenger.title')} pageContentClasses="messenger-chat-rooms-content">
                <Grid container spacing={24}>
                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div style={{ display: 'flex' }}>
                            control
                        </div>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper title="Latest conversations" removepadding="true">
                            conversation
                        </CustomPaper>
                    </Grid>
                </Grid> 
            </GenericPage>            
        )
    }
}

// const mapStateToProps = ({ chatRooms }) => {
//     return { chatRooms };
// }

// Messenger.defaultProps = {
//     chatSearch: PropTypes.func,
//     getChatRooms: PropTypes.func,
//     chatRooms: PropTypes.object
// }

export default connect(null, { chatSearch, getChatRooms })(MessengerSingle);
