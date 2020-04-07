import React, {useState}from 'react';

import Card from '../../shared/components/UIElements/Card'
import TextField from '@material-ui/core/TextField';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../../shared/components/FormElements/Button';

import './FeatureItem.css';


const FeatureItem2 = props => {
  
  const [startTime, setStartTime] = useState('00:01');
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
      id: Math.random().toString(),
      start: startTime,
      end: endTime,
      postura: postura,
      tipo: tipo
    }
    props.onnAddFeature(newFeature)
    console.log(newFeature)

  }

  const addStartTime = () => {
    setStartTime(props.newTime)
    console.log('Start time:', startTime)
  }

  const addEndTime = () => {
    setEndTime(props.newTime)
    console.log('End time:', endTime)
  }

  //useEffect(() => {
  //  console.log(props.newTime)
  //  //setStartTime(props.newTime)
  //  console.log(props)
  //}, [props]);

  return (
    <section className="ingredient-form">
      <Card>
        <h4># Add Feature </h4>
          <Grid container spacing={3} >
            <Grid container item xs= {6}  direction="column"  alignItems="center">
              <InputLabel id="helper-label">Start Time</InputLabel>
              <TextField
                id="startTime"
                //label="Start Time"
                type="time"
                name="time"
                value={startTime}
                onChange={handleStartTime}
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                min: "00:00", 
                max: "23:00"
                }}
              />
              
            </Grid>
            <Grid container item xs= {6}> 
              <Button type="submit" onClick={addStartTime}> SET TIME </Button>
            </Grid>
            <Grid container item xs= {6}  direction="column"  alignItems="center">
              <InputLabel id="helper-label">End Time</InputLabel>
              <TextField
                id="endTime"
                //label="End Time"
                type="time"
                value={endTime}
                onChange={handleEndTime}
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
              />
            </Grid>
            <Grid container item xs= {6}> 
              <Button type="submit" onClick={addEndTime}> SET TIME </Button>
            </Grid>
          </Grid>
          <form onSubmit={addFeatureHandle}>
          <Grid container spacing={3} >
            <Grid container item xs={12} direction="column" justify="center" >
              <InputLabel id="helper-label">Postura</InputLabel>
                <Select
                    labelId="labelId"
                    id="postura"
                    value={postura}
                    onChange={handlePostura}
                    autoWidth
                    //className={classes.select}
                    >
                    <MenuItem value={0}>Mala</MenuItem>
                    <MenuItem value={1}>Buena</MenuItem>
                </Select>
            </Grid>
            <Grid container item xs={12} direction="column" justify="center"  >
              <InputLabel id="helper-label">Tipo de postura</InputLabel>
              <Select
                  labelId="labelId"
                  id="select"
                  value={tipo}
                  onChange={handleTipo}
                  //className={classes.select}
                  >
                  <MenuItem value={0}>Postura 1</MenuItem>
                  <MenuItem value={1}>Postura 2</MenuItem>
                  <MenuItem value={2}>Postura 3</MenuItem>
              </Select>
            </Grid>
            <Grid 
              container 
              item
              justify="center"
              alignItems="center"
              xs={12}>
              <Button type="submit"> ADD </Button>
            </Grid>
            </Grid>
          </form>
      </Card>
    
    </section>
  );
}

export default FeatureItem2;
