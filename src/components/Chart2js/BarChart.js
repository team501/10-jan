import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class BarChart extends Component {
constructor(props) {
super(props);
this.state = { data: [],
   value: 0,
   //labels: [],
   isLoading:false
  };
  
} 

data = { labels: ['Peak', 'Average', 'Recirc', 'Minimum'],
    datasets: [ { 
  backgroundColor: [
          'rgba(245, 166, 35)',
          'rgba(126, 211, 33)',
          'rgba(248, 231, 28)',
          'rgba(208, 2, 27)'
         
        ],
        borderColor: [
          'rgba(245, 166, 35)',
          'rgba(126, 211, 33)',
          'rgba(248, 231, 28)',
          'rgba(208, 2, 27)'
          
        ],
  borderWidth: 1,
  data: [ 4000, 3000, 2000, 1000, 500]
  }] 
}


render () {
if(this.state.isLoading) {
return(<div></div>);
} else {
return( <div> <Bar data={this.data} width={50} height={40} options={{ maintainAspectRatio: false, legend: {
  display: false
},scales: {
  xAxes: [{
      barPercentage: 0.1,
      ticks: {
        fontSize: 20
    }
  }],
  yAxes: [{
      position: 'right',
      ticks: {
        fontSize: 20,
        fontWeight:800
    }
  }]} }}/> </div>);
}
}
}

export default BarChart;