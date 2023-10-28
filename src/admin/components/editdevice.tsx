import { Box, Button } from '@mui/material'
import React from 'react'
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { BarChart } from '@mui/x-charts/BarChart';


function Editdevice() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start', padding: '10px' }}>
            <Box sx={{ marginLeft: '10px' }}>
                <h2>DEVICE 1</h2>
            </Box>
            <Box sx={{ width: '100%', marginLeft: '20px', textAlign: 'center' }}>
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }} >
                    <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>Current :</text>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            size="small"
                        />
                    </FormControl>
                    <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>KW :</text>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">KW</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            size="small"
                        />
                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }} >
                    <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>Status : <span style={{ color: 'green' }}>RUN</span> </text>

                </Box>
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }} >
                    <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>Criterai:</text>

                    <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>RUN :</text>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            size="small"
                        />
                    </FormControl>
                    <text style={{ fontWeight: 'bold', textAlign: 'start', marginLeft: '5px' }}>STOP :</text>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            size="small"
                        />
                    </FormControl>
                </Box>
                <Box>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                        width={700}
                        height={300}
                    />
                </Box>
                <Box>
                    <Button variant="contained" sx={{ width: '20%', margin: '20px', bgcolor: 'red' }} onClick={() => { history.back() }}> back</Button>
                    <Button variant="contained" sx={{ width: '20%', margin: '20px', bgcolor: 'green' }}> save</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Editdevice
