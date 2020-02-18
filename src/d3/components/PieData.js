import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import * as d3 from "d3";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AnimatedPieHooks from "./AnimatedPieHooks";
import Button from '../../shared/components/FormElements/Button';

import "./PieData.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '90%',
    margin: '1rem auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const PieData = props => {

  const classes = useStyles();
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button onClick={changeData}>Transform</Button>
        </Grid>
        <Grid item xs={12}>
          <div>
            <span className="label">Animated Pie</span>
            <AnimatedPieHooks
              data={data}
              width={200}
              height={200}
              innerRadius={60}
              outerRadius={100}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default PieData;