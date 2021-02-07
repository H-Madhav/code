import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Checkbox, FormControlLabel } from '@material-ui/core';
import { useStyles } from './styles';
import CancelIcon from '@material-ui/icons/Cancel';

export const SelectPower = ({ handleClose, handleQantSelection, data }) => {
  const classes = useStyles();
  const [selectAll, setSelectAll] = useState(false);
  const [lenses, setLenses] = useState([])

  useEffect(() => {
    setLenses(data)
  }, [data])

  const handleSelectAll = () => {
    const data = [...lenses];
    if (selectAll) {
      setSelectAll(false);
      setLenses(data.map(lens => {
        return { ...lens, selected: false }
      }))
    } else {
      setSelectAll(true);
      setLenses(data.map(lens => {
        return { ...lens, selected: true }
      }))
    }
  };

  const handleSelect = (index) => {
    const data = [...lenses];
    if (data[index].hasOwnProperty('selected')) {
      if (data[index].selected) {
        data[index].selected = false
      } else {
        data[index].selected = true
      }
    } else {
      data[index].selected = true
    }
    setLenses(data)
  }

  const totalSelected = () => {
    const selectedLens = lenses.filter(lens => lens.selected);
    return selectedLens.length;
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <p className={classes.title}>Select Power <span className={classes.selectedText}>{`(${totalSelected()} selected)`}</span></p>
        <IconButton className={classes.icon} onClick={handleClose}>
          <CancelIcon />
        </IconButton>
      </Box>
      <Box className={classes.selectBox}>
        <FormControlLabel
          control={<Checkbox color='primary' checked={selectAll} onChange={handleSelectAll} name="Select-All" />}
          label="Select All"
        />
      </Box>
      <Box className={classes.body}>
        {lenses.map((lens, i) => {
          return (
            <Button
              className={classes.buttonStyle}
              color='primary'
              variant={lens.selected ? 'contained' : 'outlined'}
              key={lens.id}
              onClick={() => handleSelect(i)}
            >
              {lens.power}
            </Button>
          )
        })}
      </Box>
      <Box className={classes.footer}>
        <Button
          className={classes.footerButton}
          fullWidth color='primary'
          variant='contained'
          onClick={() => handleQantSelection(lenses)}
        >
          Select Quantity
        </Button>
      </Box>
    </Box>
  )
}
