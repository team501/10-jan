import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';


class CircularProgress extends Component {
	
	percentage = this.props.percentage;
	
	render() {
		return(
				<CircularProgressbar
				  percentage={this.percentage}
				  text={`${this.percentage}%`}
				  background
				  backgroundPadding={0}
				  styles={{
				    path: { stroke: `rgba(135,0,56, ${this.percentage / 100})`, strokeLinecap: 'butt' },
				    text: { fill: '#121212', fontSize: '25px' },
				    trail: { stroke: '#d7d7d7' },
				    background: {
			            fill: '#ffffff',
			          }
				  }}
				/>	
		);
	}
}
export default CircularProgress;