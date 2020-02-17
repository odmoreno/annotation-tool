import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '../../shared/components/FormElements/Button';

import FeatureItem from './FeatureItem';
import VideoPlayer from '../../player/components/VideoPlayer';

import './FeatureList.css';

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

const FeatureList = props => {
  const classes = useStyles();
  const [annotationList, setList] = useState(0)

  const [features, setFeatures] = useState([]);
  const [time, setTime] = useState('00:00')

  const addNewFeature = newFeature => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setFeatures(preveature => preveature.concat(newFeature));
  };

  const addTime = newTime => {
    setTime(newTime)
  }

  const addBoxHandler = () => {
    setList(annotationList + 1)
    console.log(annotationList)
  }

  function showItems (){
    let rows=[]
    for (let i= 0; i < annotationList; i++){
      rows.push(
        <FeatureItem 
          key={i} 
          id={i}
          newTime = {time}
          onnAddFeature = {addNewFeature}
        ></FeatureItem>)
    }
    return rows;
  }

  useEffect(() => {
    console.log(features)
  }, [features]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Herramienta de etiquetado de video</h2>
            <Button inverse onClick={addBoxHandler}> Add +</Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoPlayer onnAddTime = {addTime}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={1}>
            <form className="place-form">
              {showItems()}
            </form>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default FeatureList