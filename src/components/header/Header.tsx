import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100vw",
    height: "100px",
    display: "flex",
    alignItems: "center",
    // backgroundColor: "#333231",
    backgroundColor: "#F4F5F6",
  },
  typo: {
    fontFamily: "Aclonica",
    color: "#2b2b2b",
    userSelect: "none",
    cursor: "pointer",
    paddingLeft: theme.spacing(8),
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography
          className={classes.typo}
          variant="h4"
          children="exchangerates"
        />
      </Link>
    </Paper>
  );
};

export default Header;
