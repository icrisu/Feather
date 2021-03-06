import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	}
});

function FlatButtons(props) {
	const { classes } = props;
	return (
		<div>
		<Button className={classes.button}>Default</Button>
		<Button color="primary" className={classes.button}>
			Primary
		</Button>
		<Button color="secondary" className={classes.button}>
			Secondary
		</Button>
		<Button disabled className={classes.button}>
			Disabled
		</Button>
		<Button href="#flat-buttons" className={classes.button}>
			Link
		</Button>
		<input
			accept="image/*"
			className={classes.input}
			id="flat-button-file"
			multiple
			type="file"
		/>
		<label htmlFor="flat-button-file">
			<Button component="span" className={classes.button}>
			Upload
			</Button>
		</label>
		</div>
	);
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);
