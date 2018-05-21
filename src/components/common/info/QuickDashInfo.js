import React from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import TrendingUp from '@material-ui/icons/TrendingUp';
import TrendingFlat from '@material-ui/icons/TrendingFlat';
import TrendingDown from '@material-ui/icons/TrendingDown';

export default props => {
    const { trend } = props;
    const trendUp = trend === 'up';
    const trendDown = trend === 'down';
    const trendFlat = trend === 'flat';
    
    const renderTrend = () => {
        if (trend) {
            const trendStyle = { fontSize: 22, verticalAlign: 'bottom', marginLeft: 6 };
            if (trendUp) {
                return <span className="trend trend-up"><TrendingUp style={trendStyle} /></span>
            }
            if (trendDown) {
                return <span className="trend trend-down"><TrendingDown style={trendStyle} /></span>
            }
            if (trendFlat) {
                return <span className="trend trend-flat"><TrendingFlat style={trendStyle} /></span>
            }                        
        }
    }
    
    return(
        <div className="quick-dash-info">
            <Typography variant="body2" gutterBottom>{ props.title || '' }</Typography>
            <Typography className="additional-info" variant="body1" gutterBottom>{ props.info || '' }</Typography>
            <div>
                <Typography className={ classNames('main-value trend', { 
                    'trend-up': trendUp, 'trend-down': trendDown, 'trend-flat': trendFlat
                }) } variant="body1" gutterBottom>{ props.value || '' }</Typography>                
                { renderTrend() }
            </div>
        </div>        
    )
}
