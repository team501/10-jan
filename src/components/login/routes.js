import React from 'react';
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom';

import Login from './Login';
import Landingpage from './Landingpage';
import ManageEquipment from './ManageEquipment';
import SorterDetailContainer from '../UnitSorter/SorterDetails/SorterDetailContainer';
import ChuteStatus from '../UnitSorter/SorterDetails/ChuteStatus';
import InductStatus from '../UnitSorter/SorterDetails/Induction/InductionStatusContainer';


const Routes = () => (
<BrowserRouter >
	<Switch>
		<Route exact path="/" component={Login}/>
		<Route path="/landingpage" component={Landingpage}/>
		<Route path="/manageequipment" component={ManageEquipment}/>
		<Route path="/sorterdetails" component={SorterDetailContainer}/>
		<Route path="/chuteStatus" component={ChuteStatus}/>
		<Route path="/inductStatus" component={InductStatus}/>
	</Switch>
</BrowserRouter> );
export default Routes;
