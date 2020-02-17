import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


import './PlaceItem.css';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    select: {
        margin: theme.spacing(1),
        minWidth: 300,
    }
}));

const BoxItem = props => {
    const classes = useStyles();
    
    const [age, setAge] = useState('');
    const [tipo, setTipo] = useState('');

    const handleChange = event => {
        setAge(event.target.value);
    };

    const handleChange2 = event => {
        setTipo(event.target.value);
    };

    return (
        <div  id ={props.id} className="place-item">
            <Paper elevation={4}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h4>items {props.id}</h4>
                        <TextField
                            id="time"
                            label="Start time"
                            type="time"
                            defaultValue="00:00"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                                min: "00:00",
                                max: "05:00"
                            }}
                        />
                        </Grid>
                    <Grid item xs={6}>
                    <h4>items {props.id}</h4>
                        <TextField
                            id="time"
                            label="End Time"
                            type="time"
                            defaultValue="00:00"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            min: "00:00",
                            max: "05:00"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel id="helper-label">Postura</InputLabel>
                        <Select
                            labelId="labelId"
                            id="select"
                            value={age}
                            onChange={handleChange}
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
                            onChange={handleChange2}
                            className={classes.select}
                            >
                            <MenuItem value={0}>Postura 1</MenuItem>
                            <MenuItem value={1}>Postura 2</MenuItem>
                            <MenuItem value={1}>Postura 3</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Paper> 
        </div>
    )
}

export default BoxItem