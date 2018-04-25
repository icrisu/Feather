import React, { Component } from 'react';
import { connect } from 'react-redux';

class SidebarSales extends Component {

    render() {
        return(
            <div className="sidebar-sales pretty-scroll">
                <div className="sidebar-group">
                    <div className="group-title">Total sales</div>
                    <div className="group-content">
                        <div className="simple-card">
                            hello
                        </div>
                    </div>
                    <div className="group-title">Total sales by channel</div>
                    <div className="group-content" style={{ background: '#FFF' }}>
                        content
                    </div>                    
                </div>
            </div>
        )
    }
}

export default SidebarSales;
