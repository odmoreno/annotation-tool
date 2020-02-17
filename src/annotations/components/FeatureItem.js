import React, {useState, useEffect}from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../shared/components/FormElements/Button';




import './PlaceItem.css';


const useStyles = makeStyles(theme => ({
  textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 100
  },
  select: {
      margin: theme.spacing(1),
      minWidth: 200,
  }
}));

const FeatureItem = props => {
  const classes = useStyles();
  
  const [startTime, setStartTime] = useState('01:00');
  const [endTime, setEndTime] = useState('01:00');
  const [postura, setPostura] = useState(0)
  const [tipo, setTipo] = useState(0)

  const handleStartTime = event => {
    setStartTime(event.target.value)
  }

  const handleEndTime = event => {
    setEndTime(event.target.value)
  }
  
  const handlePostura = event => {
    setPostura(event.target.value)
  }

  const handleTipo = event => {
    setTipo(event.target.value)
  }

  const addFeatureHandle = event => {
    event.preventDefault();
    const newFeature = {
      id: props.id,
      start: startTime,
      end: endTime,
      postura: postura,
      tipo: tipo
    }
    props.onnAddFeature(newFeature)
    console.log(newFeature)

  }

  useEffect(() => {
    console.log(props.newTime)
    setStartTime(props.newTime)
    console.log(props)
  }, []);

  return (
    <form id={props.id} className="place-item" onSubmit={addFeatureHandle}> 
      <Paper elevation={4}>
        <h4># {props.id}</h4>
        <Grid container spacing={3}>
          <Grid item xs= {6}>
            <TextField
              id="startTime"
              label="start Time"
              type="time"
              value={startTime}
              onChange={handleStartTime}
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
              }}
              inputProps={{
              step: 300, // 5 min
              }}
          />
          </Grid>
          <Grid item xs= {6}>
            <TextField
              id="endTime"
              label="End Time"
              type="time"
              value={endTime}
              onChange={handleEndTime}
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
              }}
              inputProps={{
              step: 300, // 5 min
              }}
            />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="helper-label">Postura</InputLabel>
          <Select
              labelId="labelId"
              id="postura"
              value={postura}
              onChange={handlePostura}
              className={classes.select}
              >
              <MenuItem value={0}>Mala</MenuItem>
              <MenuItem value={1}>Buena</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="helper-label">Tipo de postura</InputLabel>
          <Select
              labelId="labelId"
              id="select"
              value={tipo}
              onChange={handleTipo}
              className={classes.select}
              >
              <MenuItem value={0}>Postura 1</MenuItem>
              <MenuItem value={1}>Postura 2</MenuItem>
              <MenuItem value={1}>Postura 3</MenuItem>
          </Select>
        </Grid>
        </Grid>
        <Button type="submit" >
          ADD
        </Button>
      </Paper>
    </form>
  );
}

export default FeatureItem;