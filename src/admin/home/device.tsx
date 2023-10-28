import { Box,Button} from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Brightness1Icon from '@mui/icons-material/Brightness1';
function createData(
    name: string,
    ip: string,
    status: string,
    color:string
) {
    return { name, ip, status,color };
}

const rows = [
    createData('Device 1', '192.168.4.2', 'ONLINE','green'),
    createData('Device 2', '192.168.4.3', 'ALARM','red'),
    createData('Device 3', '192.168.4.4', 'OFFLINE','gray'),
]

function Device() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
            <Box sx={{ marginLeft: '10px' }}>
                <h2>Device Management</h2>
            </Box>
            <Box>
                <TableContainer component={Paper} >
                    <Table aria-label="simple table" sx={{ width: '40%' }}>
                        <TableHead>
                            <TableRow sx={{ fontWeight: 'bold'}}>
                                <TableCell align="center" sx={{ fontWeight: 'bold', }}>NAME</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>IP</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>STATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ fontWeight: '900' }}>
                                        <Brightness1Icon sx={{fontSize:'10px',color:row.color}}/>{row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.ip}</TableCell>
                                    <TableCell align="center"sx={{color:row.color}}>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                <Button variant="contained" sx={{ width: '20%', margin: '20px' }}> scan</Button>
                </TableContainer>

            </Box>
        </Box>
    )
}

export default Device
