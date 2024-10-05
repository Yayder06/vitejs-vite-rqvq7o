import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Outlet, Link } from "react-router-dom";


function App() {
return (
  <>
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Link to={`home`} ><Button color="inherit">Home</Button></Link>
        <Link to={`tasks`}><Button color="inherit">Tasks</Button></Link>
        <Button color="inherit">Home</Button>
      </Toolbar>
   </AppBar>
   <Box>
     <Outlet />
   </Box>
  </>
);
}


export default App;
