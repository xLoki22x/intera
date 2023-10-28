import React from 'react'
import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
function Setup() {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                <Box sx={{ marginLeft: '10px' }}>
                    <h2>SETUP CONFIG</h2>
                </Box>

                <Box sx={{ marginLeft: '10px', display: 'flex', flexDirection: 'row', textAlign: 'start', justifyContent: 'space-around', marginBottom: '20px' }}>
                    <Box sx={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', textAlign: 'start', width: '50%', borderRight: '2px solid black' }}>
                        <text style={{ background: 'yellow', padding: '2px', width: '40px', fontWeight: 'bold', textAlign: 'center' }}>WIFI</text>
                        <Box sx={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', fontSize: '13px' }}>
                            <text>- OPPO RENO 4</text>
                            <text>- AIS 2.4G</text>
                            <text>- TRUE 2.4G</text>
                        </Box>

                        <Box sx={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', fontSize: '13px', marginTop: '20px' }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="SSID"
                                sx={{ width: '70%' }}

                            />

                            <TextField
                                required
                                id="outlined-disabled"
                                label="PASS"
                                sx={{ width: '70%', marginTop: '10px' }}
                            />
                            <Button variant="contained" sx={{ width: '50%', marginTop: '20px' }} onClick={() => { Swal.fire('CONNECT', 'Are your sure?', 'warning') }}> CONNECT</Button>
                        </Box>

                    </Box>
                    <Box sx={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', textAlign: 'start', width: '50%' }}>
                        <text style={{ background: 'green', padding: '2px', width: '100px', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Line Notify</text>
                        <Box sx={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', fontSize: '13px', marginTop: '20px' }}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Access Token"
                                sx={{ width: '70%' }}

                            />

                            <Button variant="contained" sx={{ width: '50%', marginTop: '20px' }}> CONNECT</Button>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </div>
    )
}

export default Setup
