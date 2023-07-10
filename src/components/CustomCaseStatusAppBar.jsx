import React from 'react'
import { Box, Typography, Divider,Grid } from '@mui/material'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'

export function CustomCaseStatusAppBar() {
    return (
        <div>
            <Box sx={{ border: 0, borderColor: 'violet' }}>
                <AppBar position="static" color='transparent' elevation={0}>
                    <Toolbar variant="dense">
                        <Grid md={12} container>
                            <Grid md={6} item>
                                <Typography color="grey" fontWeight={'bold'} fontSize={16}>CASES</Typography>
                            </Grid>
                            <Grid item md={6}>

                            <Typography ml={1} color="grey" fontWeight={'bold'} fontSize={16}>1 200 000 </Typography>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Divider></Divider>
            </Box>
        </div>
    )
}
