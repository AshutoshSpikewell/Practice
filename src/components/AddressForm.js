import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom'; // Import React Router's useHistory

function AddressForm() {
  const [address, setAddress] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [plotNo, setPlotNo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true);
  };

  const handleConfirm = () => {
    // You can save the address data or perform any other action here
    setOpenDialog(false);
    navigate('/');
  };

  const handleEdit = () => {
    setOpenDialog(false);
  };

  const handleAddressChange = (event) => {
    const newAddress = event.target.value;
    setAddress(newAddress);

    // Split the address string by comma and trim whitespace
    const parts = newAddress.split(',').map((part) => part.trim());

    if (parts.length >= 6) {
      setStreetAddress(parts[0]);
      setPlotNo(parts[1]);
      setCity(parts[2]);
      setState(parts[3]);
      setCountry(parts[4]);
      setZipcode(parts[5]);
    } else {
      // Reset fields if the address format is incorrect
      setStreetAddress('');
      setPlotNo('');
      setCity('');
      setState('');
      setCountry('');
      setZipcode('');
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} marginTop={'100px'}>
        <Grid item xs={12}>
          <TextField
            label="Address"
            fullWidth
            variant="outlined"
            value={address}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Street Address"
            fullWidth
            variant="outlined"
            value={streetAddress}
             
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Plot No."
            fullWidth
            variant="outlined"
            value={plotNo}
             
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="City"
            fullWidth
            variant="outlined"
            value={city}
             
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="State"
            fullWidth
            variant="outlined"
            value={state}
             
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Country"
            fullWidth
            variant="outlined"
            value={country}
             
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Zipcode"
            fullWidth
            variant="outlined"
            value={zipcode}
             
          />
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Button variant="outlined" color="secondary" type="reset" >
          Reset
        </Button>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure this is the address?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit} color="primary">
            Edit
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}

export default AddressForm;
