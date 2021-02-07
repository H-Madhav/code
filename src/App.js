import React, { useState } from 'react';
import { useStyles } from './styles';
import { SelectPower, SelectQuantity } from './components';
import { Box, Button, Dialog } from '@material-ui/core';

const lenseData = [
  { power: -0.5, id: 1 }, { power: -0.75, id: 2 }, { power: -1.0, id: 3 },
  { power: -1.5, id: 4 }, { power: -1.75, id: 5 }, { power: -2.0, id: 6 }
]

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectQuant, setSelectQuant] = useState(false);
  const [selectedLenses, setSelectedLenses] = useState([]);
  const [lenses, setLenses] = useState(lenseData.map(item => { return { ...item } }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectQuant(false);
    setLenses(lenseData.map(item => { return { ...item } }));
  };

  const handleQantSelection = (lenses) => {
    setSelectQuant(true);
    setSelectedLenses(lenses.filter(lens => lens.selected))
  }

  return (
    <Box className={classes.root}>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>Select Power</Button>
      <Dialog fullScreen open={open} onClose={handleClose}>
        {selectQuant ?
          <SelectQuantity selectedLenses={selectedLenses} handleClose={handleClose} />
          :
          <SelectPower data={lenses} handleClose={handleClose} handleQantSelection={handleQantSelection} />
        }
      </Dialog>
    </Box>
  );
}

export default App;
