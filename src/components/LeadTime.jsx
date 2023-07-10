import React from 'react'
import { Box, Typography, Divider,Grid } from '@mui/material'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'

export function LeadTime() {
    return (
        <div>
            <Box sx={{ border: 0, borderColor: 'violet' }}>
            <Divider></Divider>
                <AppBar position="static" color='transparent' elevation={0}>
                    <Toolbar variant="dense">
                        <Grid md={12} container sx={{display:'flex',alignItems:'center'}}>
                            <Grid md={4} item>
                                <Typography color="black" fontWeight={'bold'} fontSize={16}>LEAD TIME</Typography>
                            </Grid>
                            <Grid item md={8}>
                            


                            <Typography ml={0} color="black" fontWeight={'bold'} fontSize={16}> 13 DAY(s) 2 HR(s) 25 MIN(s) </Typography>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Divider></Divider>
            </Box>
        </div>
    )
}
