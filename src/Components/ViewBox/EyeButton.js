import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/system';
import * as React from 'react';
import './EyeButton.css';
const EyeButton = styled('button')({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0',
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  borderRadius:"5px",
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <EyeButton onClick={handleOpen}>
        <VisibilityIcon sx={{ color: 'blue' }} />
      </EyeButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        
        <Box sx={{ ...style }} >
        <h2 id="parent-modal-title">Branch Details</h2>
        <div
  className='Close_Button'
  onClick={handleClose}
  style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    color:'black',
    width: '30px',           // Set the width of the circle
    height: '30px',          // Set the height of the circle
    borderRadius: '50%',     // Make it a circle
    backgroundColor: '#f0f0f0', // Optional: Add a background color
    display: 'flex',         // Use flexbox to center the text
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',    // Center vertically
    border: '2px solid black'  // Optional: Add a border
  }}
>
  X
</div>
          <Grid container className="grid-container" md={12} lg={12} sm={12} xs={12}>
          
              <Grid item md={6} lg={6} sm={10} xs={12} >
              <Grid container md={12} lg={12} sm={12} xs={12} >
              <Grid item md={6} lg={6} sm={10} xs={12} >
              <div className="grid-container">
              <div className="grid-item">Company Name</div>
              <div className="grid-item">Branch Email</div>
              <div className="grid-item">Contact Person Name</div>
              <div className="grid-item">Branch Address</div>
              </div>
              </Grid>
              <Grid item md={6} lg={6} sm={10} xs={12} >
              <div className="grid-item">:  Empty Cafe</div>
              <div className="grid-item">:  info@emptycafe.com</div>
              <div className="grid-item">:  Edwin</div>
              <div className="grid-item">:  6th Main Rd, V Block,Anna Nagar,Chennai,Tamil Nadu 6000 40</div>
              </Grid>
              </Grid>
              </Grid>

              
              <Grid item md={6} lg={6} sm={10} xs={12} >
              <Grid container md={12} lg={12} sm={12} xs={12} >
              <Grid item md={6} lg={6} sm={10} xs={12} >
              <div className="grid-container">
              <div className="grid-item">Registration Number</div>
              <div className="grid-item">Landline Number</div>
              <div className="grid-item">Contact Person Number</div>
              </div>
              </Grid>
              <Grid item md={6} lg={6} sm={10} xs={12} >
              <div className="grid-item">:  6392712542</div>
              <div className="grid-item">:  +91 6342146694</div>
              <div className="grid-item">:  +91 9773547391</div>
              </Grid>
              </Grid>
              
              </Grid>
              </Grid>
              

         
        </Box>
      </Modal>
    </div>
  );
}
