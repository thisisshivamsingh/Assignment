import React from 'react'
import TextField from '@mui/material/TextField';
import "./textfield.css"
import { red } from '@mui/material/colors';
// const styles={
//   root:{
//   orderColor: 'none',
//   paddingTop: '81px',
//   paddingBottom: '81px',
//   paddingLeft: '81px',
//   paddingRight: '81px',
//   backgroundColor: 'green',
//   padding: '12px',
//   }
// }
// const styles = theme => ({
//   inputPadding : {
//     padding: '30px',
//   }
// });

const Textfield = () => {
  // const { classes } = props;
  return (
    <>
      <TextField
    inputProps={{
       style: {
         padding: 100,
       }
    }}
/>
    </>
  )
}

export default Textfield;

// const theme = createMuiTheme({
//   overrides: {
//     root: {
//      margin: "10px",
//      padding:"10px" 
//     }
//   }
// }); 