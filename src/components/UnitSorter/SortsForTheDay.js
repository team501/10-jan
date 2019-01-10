import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import CircularprogressBar from '../Chart2js/circularProgress';
import LineChart from '../Chart2js/lineChart';

const headingGrid = {
		textAlign: 'left',
		height: '25px',
		fontSize: 'large',
		padding: '5px'
};

const mainGrid = {
		padding: '2px',
		height: '170px',
};

const leftcontentDiv = {
		padding: '2px',
		height: '100%'
};

const rightcontentDiv = {
		height: '70px',
};

const footGrid = {
		height: '100px'
};
const footlevel = {
		marginLeft:'7%',
		position:'absolute',
		marginTop:'0%'
		
};
class index extends Component{
	render(){
		return (
				<Grid container spacing={2}>
					<Grid style={headingGrid} item xs={12} sm={12}>
						Sorts for the day
					</Grid>
					<Grid xs={12} sm={4}>
						<div style={leftcontentDiv, {marginLeft: '10px'}}>
							<div style={{padding: '20px 0px 0px 0px'}}>
								<CircularprogressBar percentage={43}/>
							</div>
						</div>
					</Grid>
					<Grid style={mainGrid} item xs={12} sm={8} container>
						<Grid item xs={12} sm={12} spacing>
							<div style={rightcontentDiv}>
								<Grid container className="kpi-text-heading">
									<Grid item xs={12} sm={12}>1,300 /
									<label style={{ color: '#2ecc71', fontSize: 'x-large' }}>&nbsp;3,000</label></Grid>
								</Grid>
							</div>
						</Grid>
						<Grid style={footGrid} item xs={12} sm={12}>
						<div style={footlevel}>Last 5 Days</div>
							<div className="lineChart" style={footGrid}>
								<LineChart  color={'red'}/>
							</div>
						</Grid>
					</Grid>
				</Grid>
		);
	}
}
export default index;
