import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#FFCCBC",
    color: "#000000",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#fffff",
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    width: "auto",
    margin: 25,
  },
});

function FacultyList() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Enroll&nbsp;No.</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Semester</StyledTableCell>
            <StyledTableCell align="right">
              Outstanding&nbsp;FEE
            </StyledTableCell>
            <StyledTableCell align="right">DEADLINE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{row.Enrollno}</StyledTableCell>
              <StyledTableCell>{row.Name}</StyledTableCell>
              <StyledTableCell>{row.Batch}</StyledTableCell>
              <StyledTableCell align="right">
                {row.OutstandingFee}
                {row.OutstandingFee === 0 ? "(Paid now)" : null}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Deadline}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default FacultyList;
