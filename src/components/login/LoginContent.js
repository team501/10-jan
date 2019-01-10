import React, { Component } from 'react';
import './landing.css';
import Logoinner from '../../images/fortna_innerlogo.png';
class LoginContent extends React.Component {
    render(){
      return(
	  <div><img src={Logoinner} className="innerlogo"/>
		<div className="LoginContent-section">
        <div className="LoginContent-heading">The Distribution Experts</div>
		    <div className="LoginContent-subtext">We transformed your distribution
network for faster service</div>

			<div className="LoginContent-smalltext">@2018 FORTNA INC. ALL RIGHTS RESERVED.</div>
			</div>
			</div>

      );
    }
  }
export default LoginContent;
