import React, { Component } from 'react';
import Header from '../../../login/Header';
import InductionStatusDetail from './InductionStatusDetail';
import Footer from '../../../login/Footer';


class index extends Component {
    render(){
      return(<div>
      			<Header/>
      			<InductionStatusDetail />
      			<Footer />
      		</div>
      );
    }
  }
export default index;
