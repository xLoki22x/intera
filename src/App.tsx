import './App.css'
import Approot from '../src/service/routes/approot'
import { Box, Typography } from '@mui/material'
import { Outlet } from "react-router-dom";
function App() {

  return (

    <Box sx={{ width: '1000px', height: '100%', bgcolor: 'white', color: 'black' }}>
      <Approot />
      <Outlet />
      {/* <Box sx={{ margin: '30px' }}>
        <Typography sx={{padding:'40px',fontSize:'30px',fontWeight:'bold'}}>WELCOME <span style={{color:'blue'}}>INTERA</span></Typography>
        <Typography sx={{padding:'10px',fontSize:'20px',fontWeight:'bold'}}>
          "Is Life Your Life"</Typography>
      </Box> */}
    </Box>


  )
}

export default App
