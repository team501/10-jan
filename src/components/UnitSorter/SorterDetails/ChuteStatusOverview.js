import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Assigned from './Chute/Assigned';
import AssignedPer from './Chute/AssignedPer';
import NotAssigned from './Chute/NotAssigned';
import '../land.css';

import Legends from './Chute/Legends';
import Doughnut from '../../Chart2js/Doughnut';


const headingGrid = {
		textAlign: 'left',
		height: '25px',
		fontSize: 'large',
		padding: '5px 5px 5px 45px'
};
const mainGrid = {
		padding: '15px',
		height: '280px',
};
const bottomGrid = {
	    backgroundColor: '#F4F4F4',
	    height: '100px'
}
class index extends Component{
	
	render(){
		return (
				<Grid container>
					<Grid style={headingGrid} Sitem xs={12} sm={12}>
						<strong>Chute Status</strong>
					</Grid>
						
					<Grid style={mainGrid} container>	
						<Grid item xs={12} sm={6}>
							<Doughnut />
						</Grid>
						<Grid item xs={12} sm={5}>
							<Legends />
						</Grid>
						<Grid item xs={12} sm={1}>
							
							
							<div className="right-arrow1"> 
								<Link to={`/chuteStatus`}> <span className="glyphicon glyphicon-menu-right arr2"></span> </Link>
								</div>
						</Grid>
					</Grid>
					
					<Grid style={bottomGrid} container>
						<Grid item xs={4} sm={4}>
							<Assigned />
						</Grid>
						<Grid item xs={4} sm={4}>
							<NotAssigned />
						</Grid>
						<Grid item xs={4} sm={4}>
							<AssignedPer />
						</Grid>
					</Grid>
				
				</Grid>
		);
	}
}
export default index;
