import React, { useReducer, useEffect } from 'react';

//import { validate } from '../../util/validators';
import './Input.css';

import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
  textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 100
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

const Input = props => {
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

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : props.element === 'textarea' ?(
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ): props.element === 'timer' ? (
      <input
        id= {props.id}
        label= {props.label}
        type= "time"
        value = {inputState.value}
        className={classes.textField}
      />
    ): props.element === 'select' ?(
      <Select
        labelId="labelId"
        id="select"
        value={inputState.value}
        onChange={changeHandler}
        className={classes.select}
        >
        <MenuItem value={0}>Mala</MenuItem>
        <MenuItem value={1}>Buena</MenuItem>
      </Select>
    ): (
      <Select
        labelId="labelId"
        id="select"
        value={inputState.value}
        onChange={changeHandler}
        className={classes.select}
        >
        <MenuItem value={0}>Postura 1</MenuItem>
        <MenuItem value={1}>Postura 2</MenuItem>
        <MenuItem value={1}>Postura 3</MenuItem>
      </Select>
    )
  return (
    <div
    className={`form-control ${!inputState.isValid && inputState.isTouched &&
      'form-control--invalid'}`}  
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
