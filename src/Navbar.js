import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Button color="inherit" variant="title" onClick={() => alert('Does NOthong')}>
                        Abroad
                    </Button>
                </ListItemText>


                <ListItemText inset>
                    <Button color="inherit" variant="title" onClick={() => alert('Does NOthong')}>
                        Lumio
               </Button>
                </ListItemText>


                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                        Contact
               </Typography>
                </ListItemText>
            </ListItem >

        </List>
    )
}


export default NavBar;
