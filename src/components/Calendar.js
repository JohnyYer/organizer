import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '3em',
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		height: '168px',
		cursor: 'pointer',
		'&:hover': {
			background: '#f5f5f5',
		},
	},
}));

export const Calendar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid container item xs={12} spacing={1}>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
				</Grid>
				<Grid container item xs={12} spacing={1}>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
				</Grid>
				<Grid container item xs={12} spacing={1}>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>item</Paper>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
