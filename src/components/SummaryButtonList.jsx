import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Grid, Typography } from '@mui/material';

export function SummaryButtonList() {

    const case_status = ['New', 'Review', 'Booked', 'Published', 'Declined', 'Completed', 'Pending', 'Deffered', 'No Show', 'NoNurseAction', 'NotPublished']
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', border:1,borderColor:'divider' }}>
            <nav aria-label="main mailbox folders">
                <List sx={{}}>
                    {case_status.map((status, index) => {
                        return (
                            <ListItem   key={index} dense={false} divider={true} disablePadding>
                                <ListItemButton selected={selectedIndex === index } onClick={(event)=>handleListItemClick(event,index)}
                                sx={{
                                        maxHeight: 40,
                                        "&.Mui-selected": {
                                            backgroundColor: "#d9ead3"
                                        },
                                        "&.Mui-focusVisible": {
                                            backgroundColor: "#d9ead3"
                                        },
                                        ":hover": {
                                            backgroundColor: "#d9ead3"
                                        }
                                    }}>
                                    <Grid md={12} container sx={{bgcolor:'',border:0}}>
                                        <Grid md={6} item  mr={0.0} sx={{bgcolor:'',border:0}}>
                                            <ListItemText sx={{ml:1}} primary={status} />
                                        </Grid>
                                        <Grid md={6} item sx={{bgcolor:'',border:0}}>
                                            <ListItemText disableTypography sx={{ml:1}} primary = {<Typography>1 200 000</Typography>}/> 
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        )
                    })

                    }

                </List>
            </nav>

        </Box>
    );
}
