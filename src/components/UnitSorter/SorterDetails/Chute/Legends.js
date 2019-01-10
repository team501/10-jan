import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { Label  } from 'react-bootstrap';
import './label.css'


const parentGrid = {
	    paddingTop: '5%'
};

const headingGrid = {
		paddingBottom: '20px',
		fontSize: 'larger',
};

const headingFont1 = {
		fontFamily: 'sans-serif',
		padding: '5px 0px'
};

const headingFont2 = {
		fontFamily: 'sans-serif',
	    fontSize: 'x-large'
};

const labelStyle= {
		padding: '5px 15px 15px 15px',
		float: 'left'
};


class index extends Component { 
	render() { 
		return (
				 <Grid style={parentGrid} container>
					 <Grid style={headingGrid} item xs={12} sm={12}>
					 	Chute Utilization - <span style={{fontSize:'25px'}}><strong> 780</strong></span>
			         </Grid>
					 	
					 <Grid container>
						 <Grid style={headingFont1} item xs={4} sm={4}>
						 	<Label style={labelStyle} bsStyle="success">{' '}</Label> <div style={{float: 'left',
						 																		    paddingLeft: '5%'}}>Full</div>
				         </Grid>
						 <Grid style={headingFont2} item xs={8} sm={8}>
						 	500 - 82 %
				         </Grid>
			         </Grid>
					 
					 <Grid container>
						 <Grid style={headingFont1} item xs={4} sm={4}>
						 <Label style={labelStyle} bsStyle="warning">{' '}</Label> <div style={{float: 'left',
							    															   paddingLeft: '5%'}}>Empty</div>
				         </Grid>
						 <Grid style={headingFont2} item xs={8} sm={8}>
						 	150 - 10 %
				         </Grid>
			         </Grid>
					 	
					 <Grid container>
						 <Grid style={headingFont1} item xs={4} sm={4}>
						 <Label style={labelStyle} bsStyle="danger">{' '}</Label> <div style={{float: 'left',
							   																	paddingLeft: '5%'}}>Error</div> 
				         </Grid>
						 <Grid style={headingFont2} item xs={8} sm={8}>
						 	25 - 03 %
				         </Grid>
			         </Grid>
					 	
					 <Grid container>
						 <Grid style={headingFont1} item xs={4} sm={4}>
						 <Label style={labelStyle} bsStyle="default">{' '}</Label> <div style={{float: 'left',
							   																	paddingLeft: '5%'}}>Disabled</div> 
				         </Grid>
						 <Grid style={headingFont2} item xs={8} sm={8}>
						 	5 - 01 %
				         </Grid>
			         </Grid>
					 	
				 </Grid>
		);}
}
export default index;