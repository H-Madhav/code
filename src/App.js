import React from 'react';
import { useStyles } from './styles';
import { Box, List, ListItem, ListItemIcon, ListItemText, Collapse, Typography } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import FaceIcon from '@material-ui/icons/Face';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListSubheader from '@material-ui/core/ListSubheader';
import SettingsIcon from '@material-ui/icons/Settings';
import BuildIcon from '@material-ui/icons/Build';
import FolderIcon from '@material-ui/icons/Folder';
import BarChartIcon from '@material-ui/icons/BarChart';
import TableChartIcon from '@material-ui/icons/TableChart';


function App() {

  const classes = useStyles();
  const [openUtility, setOpenUtility] = React.useState(false);
  const [openPages, setOpenPages] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Box className={classes.header}>
          <Box className={classes.headerContainer}>
            <FaceIcon classes={{ root: classes.headerIcon }} />
            <Typography className={classes.title}>SB Admin<sup className={classes.supStyle}>2</sup></Typography>
          </Box>
        </Box>

        <Box className={classes.list}>
          <Box className={classes.mainList}>
            <DashboardIcon classes={{ root: classes.listIcon }} />
            <p className={classes.dashboardText}>Dashboard</p>
          </Box>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div" className={classes.subheader}>
                Interface
            </ListSubheader>
            }
          >
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon classes={{ root: classes.listIcon }} />
              </ListItemIcon>
              <ListItemText primary="Components" className={classes.listText} />
            </ListItem>

            <ListItem button onClick={() => setOpenUtility(!openUtility)}>
              <ListItemIcon>
                <BuildIcon classes={{ root: classes.listIcon }} />
              </ListItemIcon>
              <ListItemText primary="Utilites" className={classes.listText} />
              {openUtility ? <ExpandLess classes={{ root: classes.listIcon }} /> : <ExpandMore classes={{ root: classes.listIcon }} />}
            </ListItem>
            <Collapse in={openUtility} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder classes={{ root: classes.listIcon }} />
                  </ListItemIcon>
                  <ListItemText primary="Starred" className={classes.listText} />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Box>

        <Box className={classes.list}>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div" className={classes.subheader}>
                AddOns
            </ListSubheader>
            }
          >
            <ListItem button onClick={() => setOpenPages(!openPages)}>
              <ListItemIcon>
                <FolderIcon classes={{ root: classes.listIcon }} />
              </ListItemIcon>
              <ListItemText primary="Pages" className={classes.listText} />
              {openPages ? <ExpandLess classes={{ root: classes.listIcon }} /> : <ExpandMore classes={{ root: classes.listIcon }} />}
            </ListItem>
            <Collapse in={openPages} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder classes={{ root: classes.listIcon }} />
                  </ListItemIcon>
                  <ListItemText primary="Starred" className={classes.listText} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button>
              <ListItemIcon>
                <BarChartIcon classes={{ root: classes.listIcon }} />
              </ListItemIcon>
              <ListItemText primary="Charts" className={classes.listText} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <TableChartIcon classes={{ root: classes.listIcon }} />
              </ListItemIcon>
              <ListItemText primary="Tables" className={classes.listText} />
            </ListItem>
          </List>
        </Box>
      </div>
      <div className={classes.main}></div>
    </div>
  );
}

export default App;


