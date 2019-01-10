import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading:false };
	}	
	
	data = {  labels: [ 'Full', 'Empty', 'Error', 'Disabled' ],
		 	  datasets: [{ data: [500, 150, 25, 5],
		 		  		   backgroundColor: [ '#7ed321', '#f8e71c', '#d0021b', '#9f9c9c' ],
							  hoverBackgroundColor: [ '#7ed321', '#f8e71c', '#d0021b', '#9f9c9c' ]
	 					}]
			};
	
	render () {
		if(this.state.isLoading) {
			return(<div></div>);
		} else {
			return( <Doughnut data={this.data} height={250} width={300} options={ { maintainAspectRatio: false,
											   									  	responsive: false,
											   									  	legend: { display: false }
											   									} } /> );
			}
	}
}

export default DoughnutChart;