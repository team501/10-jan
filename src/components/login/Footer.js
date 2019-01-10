import React, { Component } from 'react';
import FooterLogo from '../../images/fortna_innerlogo.png';

	const powered = {
		
	};
	
class Footer extends React.Component {
	
	
    render(){
      return(

		<div className="footer">@2018 FORTNA INC. ALL RIGHTS RESERVED.
		<div className="powered">Powerded By &nbsp; <img src={FooterLogo} /></div>
		</div>

      );
    }
  }
export default Footer;
