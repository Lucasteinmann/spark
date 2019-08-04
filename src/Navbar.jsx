/* eslint linebreak-style: 0 */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function NavBar(props) {
  return (
    <List component="nav" style={{ backgroundColor: '#3F4448' }}>
      <ListItem component="div">
        <ListItemText inset>
          <Button color="inherit" variant="outlined" onClick={() => alert('Does NOthong')}>
                    Contact
          </Button>
        </ListItemText>

        <ListItemText inset>
          <Button color="inherit" variant="outlined" onClick={() => alert('Does NOthong')}>
                        Lumio
          </Button>
        </ListItemText>

        <ListItemText inset>
          <Button color="inherit" variant="outlined" onClick={() => alert('Does NOthong')}>
                        Computer
          </Button>
        </ListItemText>

        <ListItemText inset>
          <Button color="inherit" variant="outlined" onClick={() => alert('Does NOthong')}>
                      Lumio
          </Button>
        </ListItemText>
      </ListItem>
    </List>
  );
}


export default NavBar;
