import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from '../../common/misc/Loader';
import Fade from '@material-ui/core/Fade';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import _ from 'lodash';
import uniqid from 'uniqid';

class GenericPage extends PureComponent {

    static defaultProps = {
        showLoading: false,
        pageContentClasses: ''
    }

    constructor(props) {
        super(props);
        this.pageContentRef = React.createRef();
        this.state = { pageNav: false };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.pageNav && _.isArray(props.pageNav)) {
            return { pageNav: props.pageNav }
        }
        return null;
    }

    componentDidMount() {
        try {
            this.pageContentRef.current.scrollTop = 0;
        } catch (e) {};
    }

    scrollToBottom = () => {
        try {
            this.pageContentRef.current.scrollTo(0, this.pageContentRef.current.scrollHeight)
        } catch (e) { console.log(e)};        
    }

    _renderPageActions() {
        if (this.props.pageActions) {
            return this.props.pageActions;
        } else if (this.state.pageNav && _.isArray(this.state.pageNav)) {
            let nav = [];
            for (let i = 0; i < this.state.pageNav.length; i++) {
                const obj = this.state.pageNav[i];
                if (obj.to) {
                    nav.push(<Link to={ obj.to } key={ uniqid() }>{ obj.label }</Link>);
                } else {
                    nav.push(<span key={ uniqid() }>{ obj.label }</span>);
                }
                if (i < this.state.pageNav.length - 1) {
                    nav.push(<KeyboardArrowRight key={ uniqid() } style={{ color: '#7447a2', fontSize: 16 }} />);
                }
            }
            return nav;
        }
    }

    _renderPageHeaderArea() {
        if (this.props.overridePageHeader) {
            return this.props.overridePageHeader;
        }

        let titleUI = <h1 className="page-title">{ this.props.title }</h1>;
        if (this.props.overridePageTitle) {
            titleUI = this.props.overridePageTitle;
        }

        return(
            <div className="page-header">
                <div className="left">
                    { titleUI }
                </div>
                <div className="right nav">
                    { this._renderPageActions() }
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
    overridePageTitle: PropTypes.oneOfType([
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
    pageNav: PropTypes.array,      
    showLoading: PropTypes.bool,
    pageContentClasses: PropTypes.string
}


export default GenericPage;
