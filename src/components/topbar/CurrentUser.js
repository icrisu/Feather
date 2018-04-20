import React, { PureComponent } from 'react';
import PopOverHelper from '../utils/PopOverHelper';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

class CurrentUser extends PureComponent {



    render() {
        return(
            <div style={{ display: 'inline-block' }}>
                <PopOverHelper position="bottom-right" Button={<Button>Hello</Button>}>    
                    <div>Hello</div>
                </PopOverHelper>                         
            </div>           
        )        
    }
}


export default CurrentUser;
