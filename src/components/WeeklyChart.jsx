import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';

export function WeeklyChart() {
    return (
        <div>
                        <Box sx={{ width: '100%', border: 0,height:'200px', borderColor: 'divider' }}>
                <BarChart
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: ['M', 'T', 'W', 'T', 'F', 'S'],
                            scaleType: 'band',
                            
                        },
                    ]}
                    series={[
                        {
                            data: [2, 5, 3, 5, 6, 5],
                            label : 'NEW'
                        },
                    ]}

                />
            </Box>
            <Box sx={{ width: '100%',height:'200px', border: 0, borderColor: 'divider' }}>
                <BarChart
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: ['M', 'T', 'W', 'T', 'F', 'S'],
                            scaleType: 'band',
                           
                        },
                    ]}
                    series={[
                        {
                            data: [2, 5, 3, 5, 6, 5],
                            label : 'COMPELETED',
                            color:'#00A453'

                        },
                    ]}

                />

            </Box>

            
        </div>
    )
}
