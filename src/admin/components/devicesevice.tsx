import { Box } from '@mui/material'
import React from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
function devicesevice() {

    const navigate = useNavigate();

    const handleBoxClick = () => {
        navigate(`Editdevice/1`);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'start', padding: '10px' }}>
            <Box onClick={handleBoxClick} sx={{ borderRadius: '10px', border: '2px solid black', width: '160px', height: '100%', marginLeft: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <text style={{ fontWeight: 'bold' }}>DEVICE 2</text>
                <PowerSettingsNewIcon sx={{ transform: 'rotate(180deg)', fontSize: '60px', margin: '0 auto', color: 'green' }} />
                <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>value : <span style={{ fontWeight: 'normal' }}>Open</span></text>
                <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>Count : <span style={{ fontWeight: 'normal' }}>01 : 50 :47</span></text>
            </Box>
            <Box sx={{ borderRadius: '10px', border: '2px solid black', width: '160px', height: '100%', marginLeft: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <text style={{ fontWeight: 'bold' }}>DEVICE 3</text>
                <PowerSettingsNewIcon sx={{ transform: 'rotate(180deg)', fontSize: '60px', margin: '0 auto', color: 'gray' }} />
                <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>value : <span style={{ fontWeight: 'normal' }}>0%</span></text>
                <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>Count : <span style={{ fontWeight: 'normal' }}>0 kw</span></text>
            </Box>
        </Box>
    )
}

export default devicesevice
