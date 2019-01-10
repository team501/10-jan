import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import Runtime from '../../../../images/Total_icon.png';
const content = {
	    padding: '0px',
	    textAlign: 'center'
}

const imageGrid = {
		padding: '5px'
};

const imageRuntime = {
		width: '65px',
		marginTop: '5%'
}

class index extends Component { 
	render() { 
		return (
				 <Grid style={content} container>
				 	<Grid style={imageGrid} item xs={12} sm={12}> <img style={imageRuntime} src={Runtime} /> </Grid>
				 	<Grid item xs={12} sm={12} style={{fontSize: '24px'}}> Total </Grid>
				 	<Grid item xs={12} sm={12} style={{fontSize: '35px', color: '#008bff'}}> 01:23 Hrs </Grid>
				 </Grid>
		);}
}
export default index;