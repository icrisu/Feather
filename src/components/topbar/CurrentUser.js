import React, { PureComponent } from 'react';
import PopOverHelper from '../utils/PopOverHelper';

class CurrentUser extends PureComponent {



    render() {
        return(
            <div style={{ display: 'inline-block' }}>
                <PopOverHelper position="bottom-right">    
                    <div>Hello</div>
                </PopOverHelper>                         
            </div>           
        )        
    }
}


export default CurrentUser;
