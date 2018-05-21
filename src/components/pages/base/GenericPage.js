import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../common/misc/Loader';
import Fade from 'material-ui/transitions/Fade';

class GenericPage extends PureComponent {

    static defaultProps = {
        showLoading: false,
        pageContentClasses: ''
    }

    constructor(props) {
        super(props);
        this.pageContentRef = React.createRef();
    }

    componentDidMount() {
        try {
            this.pageContentRef.current.scrollTop = 0;
        } catch (e) {};
    }

    _renderPageHeaderArea() {
        if (this.props.overridePageHeader) {
            return this.props.overridePageHeader;
        }
        return(
            <div className="page-header">
                <div className="left">
                    <h1 className="page-title">{ this.props.title }</h1>
                </div>
                <div className="right">
                    { this.props.pageActions }
                </div>
            </div>             
        )
    }

    render() {
        const { pageContentClasses } = this.props;
        return(
            <div className="page-content" ref={this.pageContentRef}>
                { this._renderPageHeaderArea() } 
                <Fade in={ true } timeout={ 500 }>
                    <div className={`content ${pageContentClasses}`}>
                        <Loader showloader={ this.props.showLoading } pageloader />
                        { this.props.children }
                    </div>
                </Fade>
            </div>
        )
    }
}

GenericPage.propTypes = {
    title: PropTypes.string,
    overridePageHeader: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),    
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    pageActions: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),    
    showLoading: PropTypes.bool,
    pageContentClasses: PropTypes.string
}


export default GenericPage;
