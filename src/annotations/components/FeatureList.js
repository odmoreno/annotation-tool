import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '../../shared/components/FormElements/Button';
//import Card from '../../shared/components/UIElements/Card'


import FeatureItem from './FeatureItem2';
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
  //const [annotationList, setList] = useState(0)

  const dummy_videos = [
    {
      'titulo': '2097',
      'name': '2097.mp4',
      'url': 'https://res.cloudinary.com/dl9owe03r/video/upload/v1586221997/2097_vvhe4h.mp4'
    },
    {
      'titulo': '2085',
      'name': '2085.mp4',
      'url': 'https://res.cloudinary.com/dl9owe03r/video/upload/v1586222045/2085_v9vi2q.mp4'
    },
    {
      'titulo': '2083',
      'name': '2083.mp4',
      'url': 'https://res.cloudinary.com/dl9owe03r/video/upload/v1586245885/2083_qpidgz.mp4'
    },
    {
      'titulo': '2074',
      'name': '2074.mp4',
      'url': 'https://res.cloudinary.com/dl9owe03r/video/upload/v1586245877/2074_guse0e.mp4'
    },
    {
      'titulo': '2096',
      'name': '2096.mp4',
      'url': 'https://res.cloudinary.com/dl9owe03r/video/upload/v1586245870/2096_vfaqet.mp4'
    },
    {
      'titulo': '2077',
      'name': '2077.mp4',
      'url': 'https://res.cloudinary.com/dl9owe03r/video/upload/v1586245840/2077_jgq7ns.mp4'
    }
  ];

  const [counter, setCounter] = useState(0)
  const [url, setUrl] = useState(dummy_videos[0].url)

  const [features, setFeatures] = useState([]);
  const [time, setTime] = useState('00:00')


  const addNewFeature = newFeature => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setFeatures(preveature => preveature.concat(newFeature));
  };

  const removeFeature = featureId => {
    setFeatures(prevfeature =>
      prevfeature.filter(feature => feature.id !== featureId)
    );
  }

  const addTime = newTime => {
    setTime(newTime)
  }
  
  const getNextVideoHandler = () => {
    if (counter < dummy_videos.length -1 ){
      setCounter(counter + 1)
      console.log('nuevo counter', counter)
      setUrl(dummy_videos[counter].url)
      console.log('nueva url', url)
    }
    else{
      console.log('Limite de videos')
      setCounter(0)
      setUrl(dummy_videos[0].url)
    }
  }

  //<Button inverse onClick={addBoxHandler}> Add +</Button>
  //const addBoxHandler = () => {
  //  setList(annotationList + 1)
  //  console.log(annotationList)
  //}

  // {showItems()} asi se llama un funcion dentro del html5 tag
  /*function showItems (){
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
  }*/

  useEffect(() => {
    console.log('Features', features)
  
    console.log('url actual', url)
    console.log('counter actual', counter)
    console.log('info', dummy_videos)
    setUrl(dummy_videos[counter].url)

  }, [features, counter, dummy_videos, url]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Herramienta de etiquetado de video</h2>
            <Button inverse onClick={getNextVideoHandler}> Next >></Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <VideoPlayer url={url} onnAddTime = {addTime}/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
          <FeatureItem
            newTime = {time}
            onnAddFeature = {addNewFeature}
            ></FeatureItem>

          <section className="ingredient-list">
            <h2>Features anotados</h2>
            <ul>
              {features.map(f => (
                <li key={f.id} onClick={removeFeature.bind(this, f.id)}>
                  <span> Inicio: {f.start}</span>
                  <span> Fin: {f.end}</span>
                  <span> Postura: {f.postura}</span>
                  <span> Tipo: {f.tipo}</span>
                </li>
              ))}
            </ul>
              <Button type="submit"> Send </Button>
          </section>
        </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default FeatureList