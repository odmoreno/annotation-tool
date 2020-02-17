import React, { useState } from 'react';

//import BoxItem from '../components/BoxItem';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '../../shared/components/FormElements/Button';
import { makeStyles } from '@material-ui/core/styles';
import BoxItem from '../components/BoxItem';

import '../components/PlaceList.css';



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

const NewPlace = () => {

  const classes = useStyles();
  
  const [annotationList, setList] = useState(0)
  //const [rows, useRows] = useState([])
 
  const addBoxHandler = () => {
    setList(annotationList + 1)
    console.log(annotationList)
  }

  function showItems (){
    let rows=[]
    for (let i= 0; i < annotationList; i++){
      rows.push(<BoxItem key={i} id={i}></BoxItem>)
    }
    return rows;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            xs=12 <h2>NewPlace Works!</h2>
            <Button inverse onClick={addBoxHandler}> Add Etiqueta</Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={1}>
            <form className="place-form">
              {showItems()}
            </form>
          </Paper>
          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  )
};

export default NewPlace;