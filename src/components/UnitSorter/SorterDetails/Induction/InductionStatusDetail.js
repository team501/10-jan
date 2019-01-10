import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './land.css'; 

const headingFont = {
	    color: '#870038',
	    fontWeight: '400',
	    fontSize: '24px',
	    padding: '15px 0px 20px 0px'
};

const styles = theme => ({
  root: {
	  flexGrow: 1,
	  padding: '90px 20px 20px 15px',
	    overflowY: 'auto',
	    backgroundColor: theme.palette.background.default,
  },
  table: {
    minWidth: 400,
    border: '1px #E7EBE8',
  },
  row: {  
	  borderCollapse: '10px !important',
  },
});

let id = 0;
function createData(color, secName, utilization, chute_num, full, disabled, duration, timestamp) {
  id += 1;
  return { id, color, secName, utilization, chute_num, full, disabled, duration, timestamp };
}

const rows = [
  createData('#ce5661' , 'Station A1', '10%', '234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('#edad02' , 'Station A2', '60%', '234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('#2ecc71' , 'Station A3', '89%', '234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('#2ecc71' , 'Station A4', '79%', '234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('#2ecc71' , 'Station A5', '99%', '234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
    <div className="breadScrum">Unit Sorter Dashboard >> Sorter A >> <strong>Induction Status</strong> </div>
	<Grid className="chuteHeader" style={headingFont} item xs={12} sm={12}>
		<Link to={`/sorterdetails`}><i class="fa fa-long-arrow-left" aria-hidden="true"></i><span className="glyphicon glyphicon-arrow-left"></span> </Link> Induction Status
	</Grid>
    
      <Table className={classes.table}>
        <TableHead>
          <TableRow className="crowH">
            <TableCell className="cheader">{' '} </TableCell>
            <TableCell align="left" className="cheader"><strong>Runtime </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Total Inducts </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Induct/hour </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Utilization </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Peak Rate </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Min Rate </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Average Rate </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Current user </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Last Scan </strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id} className="crowH">
                <TableCell style={{backgroundColor: row.color}} component="th" scope="row" className="crow1">
                  {row.secName}
                </TableCell>
                <TableCell align="left" className="crow1">02:57</TableCell>
                <TableCell align="left" className="crow1">2000</TableCell>
                <TableCell align="left" className="crow1">1000</TableCell>
                <TableCell align="left" style={{color: row.color}} className="crow1">{row.utilization}</TableCell>
                <TableCell align="left" className="crow1">2000</TableCell>
                <TableCell align="left" className="crow1">2000</TableCell>
                <TableCell align="left" className="crow1">2500</TableCell>
                <TableCell align="left" className="crow1">New User</TableCell>
                <TableCell align="left" className="crow1">ABC</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);