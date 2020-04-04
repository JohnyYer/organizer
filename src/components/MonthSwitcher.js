import React, { useState, useEffect } from 'react';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => {
	return {
		root: {
      fontSize: '18px',
      width: '100px',
      textAlign: 'center'
		},
		switcher: {
			paddingTop: '3em',
		},
		arrow: {
			cursor: 'pointer',
		},
	};
});

export const MonthSwitcher = () => {
	const classes = useStyles();

	const [month, setMonth] = useState(moment().format('MMMM'));

	const goBack = () => {
		const prevMonth = moment().month(month).subtract(1, 'month').format('MMMM');
		setMonth(prevMonth);
	};

	const goNext = () => {
		const nextMonth = moment().month(month).add(1, 'month').format('MMMM');
		setMonth(nextMonth);
  };
  
  useEffect(() => {
    console.log('month :', moment().month(month));
    
  }, [month])

	return (
		<Grid
			container
			spacing={1}
			direction='row'
			justify='center'
			alignItems='center'
			alignContent='center'
			wrap='nowrap'
			className={classes.switcher}
		>
			<ChevronLeftSharpIcon
				color='primary'
				fontSize='large'
				className={classes.arrow}
				onClick={goBack}
			/>
			<Typography className={classes.root} color='primary'>
				{month}
			</Typography>
			<ChevronRightSharpIcon
				color='primary'
				fontSize='large'
        className={classes.arrow}
        onClick={goNext}
			/>
		</Grid>
	);
};
