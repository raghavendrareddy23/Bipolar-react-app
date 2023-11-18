// import React from 'react';
// import { Grid, Button, styled } from '@mui/material';
// import vector from '../../Assets/vector.svg';

// const HeaderContainer = styled(Grid)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginBottom: '20px',
// });

// const HeaderText = styled('span')({
//   fontWeight: 'bold',
//   fontSize: '18px',
// });

// const Logo = styled('img')({
//   background: 'gray',
//   marginRight: '10px', // Adjust the margin as needed
//   height: '24px', // Adjust the height of the logo
//   width: 'auto',
// });


// const ButtonsContainer = styled(Grid)({
//   display: 'flex',
//   gap: '10px',
// });

// function Header() {
//   return (
//     <HeaderContainer container>
//       <Grid item xs={6}>
//         <div>
//           <HeaderText><Logo src={vector} alt="Logo" />VMS / Cameras / Camera Details</HeaderText>
//           <br />
//           <span>Bank Entrance-Front-View Camera1</span>
//           <br />
//           <span>View and manage camera details, recordings, and connection details</span>
//         </div>
//       </Grid>
//       <ButtonsContainer item xs={6}>
//         <Button variant="outlined">Edit Camera</Button>
//         <Button variant="outlined">Deactivate</Button>
//         <Button variant="outlined">Delete Camera</Button>
//       </ButtonsContainer>
//     </HeaderContainer>
//   );
// }

// export default Header;

import React from 'react';
import { Grid, Button } from '@mui/material';
import vector from '../../Assets/vector.svg';
import styles from './Header.module.css'; // Import your external CSS file

function Header() {
  return (
    <div className={styles.HeaderContainer}> {/* Use the class names */}
      <Grid item xs={12} md={6}>
        <div>
          <span className={styles.HeaderText}>
            <img className={styles.Logo} src={vector} alt="Logo" /> <span className={styles.text}>VMS</span> / Cameras / Camera Details
          </span>
          <br />
          <span className={styles.text1}>Bank Entrance-Front-View Camera1</span>
          <br />
          <span>View and manage camera details, recordings, and connection details</span>
        </div>
      </Grid>
      <div className={styles.ButtonsContainer}> {/* Use the class name */}
        <Button className={styles.Buttons} variant="outlined">Edit Camera</Button>
        <Button className={styles.Buttons} variant="outlined">Deactivate</Button>
        <Button className={styles.Buttons} variant="outlined">Delete Camera</Button>
      </div>
    </div>
  );
}

export default Header;
