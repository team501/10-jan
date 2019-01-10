import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './land.css'; 


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
function createData(chute_num, full, disabled, duration, timestamp) {
  id += 1;
  return { id, chute_num, full, disabled, duration, timestamp };
}

const rows = [
  createData('233', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('233', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('233', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('233', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('233', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
    <div className="breadScrum">Unit Sorter Dashboard >> Sorter A >> <strong>Chute Status</strong></div>
    <div className="chuteHeader"><Link to={`/sorterdetails`}><span className="glyphicon glyphicon-arrow-left"></span> </Link> Chute Status </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className="crowH">
            <TableCell className="cheader"><strong>Chute No. </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Full </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Disabled </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Duration </strong></TableCell>
            <TableCell align="left" className="cheader"><strong>Timestamp </strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id} className="crowH">
                <TableCell component="th" scope="row" className="crow1">
                  {row.chute_num}
                </TableCell>
                <TableCell align="left" className="crow1">{row.full}</TableCell>
                <TableCell align="left" className="crow1">{row.disabled}</TableCell>
                <TableCell align="left" className="crow1">{row.duration}</TableCell>
                <TableCell align="left" className="crow1">{row.timestamp}</TableCell>
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