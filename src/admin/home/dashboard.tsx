import { Box } from '@mui/material'
import React, { useState } from 'react'
import Devicesevice from '../components/devicesevice'

function Dashboard() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
            <Box sx={{ marginLeft: '10px' }}>
                <h2>MONITOR</h2>
            </Box>
            <Box>
                <Devicesevice />
            </Box>
            <Box sx={{ marginLeft: '10px' }}>
                <h2>FL. 2</h2>
            </Box>
            <Box sx={{ borderRadius: '10px', border: '2px solid black', width: '160px', height: '100%', marginLeft: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <text style={{ fontWeight: 'bold' }}>DEVICE 3</text>
                <h1 style={{fontSize:'30px',color:'green'}}>RUN</h1>
                <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>Current : <span style={{ fontWeight: 'normal' }}>4.59 A</span></text>
                <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>Power : <span style={{ fontWeight: 'normal' }}>0.89 kw</span></text>
            </Box>
            <Box sx={{ marginLeft: '10px' }}>
                <h2>FL. 1</h2>
            </Box>
        </Box>
    )
}

export default Dashboard
