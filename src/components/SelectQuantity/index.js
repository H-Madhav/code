import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, TextField } from '@material-ui/core';
import { useStyles } from './styles';
import CancelIcon from '@material-ui/icons/Cancel';


export const SelectQuantity = ({ handleClose, selectedLenses }) => {
  const classes = useStyles();
  const [lenses, setLenses] = useState([])

  const handleChange = index => (event) => {
    const data = [...lenses];
    data[index].quantity = event.target.value
    setLenses(data)
  };

  const totalQuantity = () => {
    const selectedLens = lenses.reduce((total, lens) => {
      return total + Number(lens.quantity)
    }, 0);
    return selectedLens;
  }

  useEffect(() => {
    if (selectedLenses.length) {
      setLenses(selectedLenses.map(lens => {
        return { ...lens, quantity: 0 }
      }))
    }
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <p className={classes.title}>Select Quantity<span className={classes.selectedText}>{`(${totalQuantity()} selected)`}</span></p>
        <IconButton className={classes.icon} onClick={handleClose}>
          <CancelIcon />
        </IconButton>
      </Box>
      <Box className={classes.body}>
        <Box className={classes.selectBox}>
          <Box className={classes.selectBoxLeftItem}><p className={classes.normalText}>Power</p></Box>
          <Box className={classes.selectBoxRightItem}><p className={classes.normalText}>Boxes</p></Box>
        </Box>
        {
          lenses.map((lens, i) => {
            return (
              <Box className={classes.selectBox} key={lens.id}>
                <Box className={classes.selectBoxLeftItem}>
                  <p className={classes.normalText}>{lens.power}</p>
                </Box>
                <Box className={classes.selectBoxRightItem}>
                  <TextField
                    variant='outlined'
                    size='small'
                    value={lens.quantity}
                    onChange={handleChange(i)}
                  />
                </Box>
              </Box>
            )
          })
        }
      </Box>
      <Box className={classes.footer}>
        <Button
          className={classes.footerButton}
          color='primary'
          variant='outlined'
          onClick={handleClose}
        >
          Buy Now
        </Button>
        <Button
          className={classes.footerButton}
          color='primary'
          variant='contained'
          onClick={handleClose}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  )
}