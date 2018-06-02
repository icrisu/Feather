import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class SimpleMap extends Component {

	static defaultProps = {
		defaultCenter: {lat: 40.756795, lng: -73.954298},
		defaultZoom: 13
	}

   	render() {
   		const GoogleMapExample = withGoogleMap(props => (
			<GoogleMap
				defaultCenter = {this.props.defaultCenter}
				defaultZoom = { this.props.defaultZoom }
			>
				{ this.props.children }
			</GoogleMap>
   		));

		return(
			<div>
				<GoogleMapExample
					containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
					mapElement={ <div style={{ height: `100%` }} /> }
				/>
			</div>
		);
   	}
};

SimpleMap.propTypes = {
	defaultCenter: PropTypes.object,
	defaultZoom: PropTypes.number
}

export default SimpleMap;
