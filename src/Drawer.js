import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ open });
  };

  return (
    <React.Fragment key={'left'}>
      <Button onClick={toggleDrawer(true)}>left</Button>
      <Drawer anchor={'left'} open={state.open} onClose={toggleDrawer(false)}>
        <div
          className={clsx(classes.list, { [classes.fullList]: false })}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemIcon><DragIndicatorIcon /></ListItemIcon>
              <ListItemText primary="Story list" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
