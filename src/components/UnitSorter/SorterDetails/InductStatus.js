import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import BarChart from '../../Chart2js/BarChart';
import '../land.css';


const headingGrid = {
		textAlign: 'left',
		height: '25px',
		fontSize: 'large',
		padding: '5px 5px 5px 45px'
};

const headingGrid2 = {
		textAlign: 'left',
		height: '25px',
	    fontSize: 'medium',
		padding: '5px'
};

const headingGrid3 = {
		height: '25px',
	    fontSize: 'medium',
		padding: '5px'
};

const bottomGrid = {
		textAlign: 'left',
		height: '25px',
	    fontSize: 'x-large',
		padding: '5px'
};

const mainGrid = {
		padding: '25px',
		height: '170px',
};

const gridContent = {
		height: '70px',
		padding: '20px',
		fontSize: 'xx-large'	
};

class index extends Component {
	render() { return (
			
			<Grid container>
				<Grid style={headingGrid} item xs={12} sm={12}>
					<strong> Induction status per hour</strong>
				</Grid>
				<Grid style={mainGrid} container spacing={24}>
					<Grid item xs={10} sm={10}>
						<Grid style={headingGrid2} item xs={12} sm={12}>
							<BarChart />
						</Grid>
					</Grid>
					
					<Grid item xs={2} sm={2}>
						<Grid style={headingGrid2} item xs={12} sm={12}>
							
							<div className="right-arrow1"> 
								<Link to={`/inductStatus`}> <span className="glyphicon glyphicon-menu-right arr1"></span> </Link>
								</div>
						</Grid>
					</Grid>
				</Grid>	
			</Grid>
	); }
}
export default index;