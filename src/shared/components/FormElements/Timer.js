import React, { useReducer, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


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

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        //isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};


const Timer = props =>{
  const classes = useStyles();

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };


  const element = (
    <TextField
      id= {props.id}
      label= {props.label}
      type= {props.time}
      defaultValue="00:00"
      value = {inputState.value}
      onChange={changeHandler}
      onBlur={touchHandler}
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
  )

  return (
    <div>
      {element}
    </div>
  );
}

export default Timer;