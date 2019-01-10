import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class BarChart extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [],
					   value: 0,
					   labels: [],
					   isLoading:false,
					   legend: {
								display: false
								}
					  };
	}	
	
	data = { labels: ['Peek', 'Average', 'Recirc', 'Minimum'],
		  	  datasets: [ { 
		  			backgroundColor: 'rgba(255,99,132,0.2)',
					backgroundColor: 'rgb(0, 102, 128, 0.5)',
		  			borderColor: 'rgba(255,99,132,1)',
		  			borderWidth: 1,
		  			hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		  			hoverBorderColor: 'rgba(255,99,132,1)',
		  			data: [ 4000, 3000, 2000, 1000, 500]
	  			}]
	};
	

	render () {
	
		if(this.state.isLoading) {
			return(<div></div>);
		} else {
			return( <div> <Bar data={this.data} width={150} height={40} options={{ maintainAspectRatio: false }}/> </div>);
		}
		
	}
}

export default BarChart;